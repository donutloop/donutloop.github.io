import * as THREE from 'three';

// --- MATERIALS ---
const matBody = new THREE.MeshStandardMaterial({ roughness: 0.2, metalness: 0.7, envMapIntensity: 1.0 }); // Dynamic Color
const matGlass = new THREE.MeshStandardMaterial({ color: 0x112233, roughness: 0.1, metalness: 0.9, envMapIntensity: 1.0 });
const matRubber = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.1 });
const matRim = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.2, metalness: 0.8 });
const matChrome = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.9 });
const matPlastic = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
const matLightFront = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffeeaa, emissiveIntensity: 2.0 });
const matLightRear = new THREE.MeshStandardMaterial({ color: 0x550000, emissive: 0xff0000, emissiveIntensity: 2.0 });

export function createCarMesh(type = 'sedan', color = null) {
    const carGroup = new THREE.Group();
    carGroup.userData.type = type;

    // 1. Color Selection
    if (!color) {
        color = pickColor(type);
    }

    // Instance specific paint material
    const paint = matBody.clone();
    paint.color.set(color);

    // 2. Build Car based on Type
    if (type === 'sedan') buildSedan(carGroup, paint);
    else if (type === 'suv') buildSUV(carGroup, paint);
    else if (type === 'sport') buildSport(carGroup, paint);
    else if (type === 'truck') buildTruck(carGroup, paint);
    else if (type === 'taxi') buildTaxi(carGroup, paint);
    else if (type === 'bus') buildBus(carGroup, paint);
    else buildSedan(carGroup, paint); // Fallback

    carGroup.castShadow = true;
    carGroup.receiveShadow = true;

    return carGroup;
}

// --- BUILDERS ---

function buildSedan(group, paint) {
    const w = 1.9, l = 4.7, hChassis = 0.55, hCabin = 0.5;
    const wheelY = 0.35;

    // 1. Chassis (Main Body)
    // Slightly tapered at bottom if possible? No, box is fine.
    const chassis = box(w, hChassis, l - 0.4, paint);
    chassis.position.set(0, wheelY + hChassis / 2, 0);
    group.add(chassis);

    // 2. Bumpers
    const bumperF = box(w, 0.35, 0.3, matPlastic);
    bumperF.position.set(0, wheelY + 0.2, l / 2 - 0.15);
    group.add(bumperF);

    const bumperR = box(w, 0.35, 0.3, matPlastic);
    bumperR.position.set(0, wheelY + 0.2, -l / 2 + 0.15);
    group.add(bumperR);

    // 3. Grille (Modern Mesh)
    const grille = box(1.0, 0.25, 0.1, matPlastic);
    grille.position.set(0, wheelY + 0.35, l / 2);
    group.add(grille);

    // Lights
    const headL = box(0.35, 0.15, 0.2, matLightFront);
    headL.position.set(-0.6, wheelY + 0.45, l / 2 - 0.1);
    group.add(headL);
    const headR = headL.clone();
    headR.position.set(0.6, wheelY + 0.45, l / 2 - 0.1);
    group.add(headR);

    const tailL = box(0.35, 0.2, 0.1, matLightRear);
    tailL.position.set(-0.6, wheelY + 0.45, -l / 2 + 0.05);
    group.add(tailL);
    const tailR = tailL.clone();
    tailR.position.set(0.6, wheelY + 0.45, -l / 2 + 0.05);
    group.add(tailR);

    // License Plates
    const plateF = box(0.3, 0.12, 0.05, matPlastic); // White plate
    plateF.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    plateF.position.set(0, wheelY + 0.2, l / 2 + 0.01);
    group.add(plateF);

    const plateR = plateF.clone();
    plateR.position.set(0, wheelY + 0.2, -l / 2 - 0.01);
    group.add(plateR);

    // 4. Cabin (Greenhouse)
    const cabin = box(w - 0.2, hCabin, l * 0.4, paint);
    cabin.position.set(0, wheelY + hChassis + hCabin / 2 - 0.05, -0.2);
    group.add(cabin);

    // Windows
    const windF = box(w - 0.25, hCabin - 0.1, 0.1, matGlass);
    windF.position.set(0, wheelY + hChassis + 0.25, l * 0.22 - 0.2);
    windF.rotation.x = -0.3;
    group.add(windF);

    const windR = box(w - 0.25, hCabin - 0.1, 0.1, matGlass);
    windR.position.set(0, wheelY + hChassis + 0.25, -l * 0.4 - 0.2); // Set back
    windR.rotation.x = 0.25;
    group.add(windR);

    // Side Windows
    addWindows(group, w - 0.15, hCabin - 0.15, l * 0.3, cabin.position);

    // 5. Mirrors
    const mirL = box(0.2, 0.12, 0.1, paint);
    mirL.position.set(-w / 2 - 0.05, wheelY + hChassis + 0.1, 0.5);
    group.add(mirL);
    const mirR = mirL.clone();
    mirR.position.set(w / 2 + 0.05, wheelY + hChassis + 0.1, 0.5);
    group.add(mirR);

    // 6. Door Handles (Subtle)
    const handleL = box(0.05, 0.05, 0.15, matChrome);
    handleL.position.set(-w / 2 - 0.01, wheelY + hChassis - 0.1, 0.2);
    group.add(handleL);
    const handleL2 = handleL.clone();
    handleL2.position.set(-w / 2 - 0.01, wheelY + hChassis - 0.1, -0.6);
    group.add(handleL2); // Rear door

    const handleR = handleL.clone();
    handleR.position.set(w / 2 + 0.01, wheelY + hChassis - 0.1, 0.2);
    group.add(handleR);
    const handleR2 = handleR.clone();
    handleR2.position.set(w / 2 + 0.01, wheelY + hChassis - 0.1, -0.6);
    group.add(handleR2);

    addWheels(group, w, 2.8, 0.35);
}

function buildTaxi(group, paint) {
    // TAXI (Detailed Sedan Style)
    const w = 1.9, l = 4.8, hChassis = 0.55, hCabin = 0.5;
    const wheelY = 0.35;

    // 1. Chassis (Main Body)
    const chassis = box(w, hChassis, l - 0.5, paint);
    chassis.position.set(0, wheelY + hChassis / 2, 0);
    group.add(chassis);

    // 2. Bumpers (Black Plastic / Rubber)
    const bumperF = box(w, 0.3, 0.4, matPlastic);
    bumperF.position.set(0, wheelY + 0.2, l / 2 - 0.2);
    group.add(bumperF);

    const bumperR = box(w, 0.3, 0.4, matPlastic);
    bumperR.position.set(0, wheelY + 0.2, -l / 2 + 0.4);
    group.add(bumperR);

    // 3. Grille & Lights
    const grille = box(0.8, 0.2, 0.1, matPlastic);
    grille.position.set(0, wheelY + 0.4, l / 2);
    group.add(grille);

    const headL = box(0.3, 0.15, 0.1, matLightFront);
    headL.position.set(-0.6, wheelY + 0.45, l / 2);
    group.add(headL);
    const headR = headL.clone();
    headR.position.set(0.6, wheelY + 0.45, l / 2);
    group.add(headR);

    const tailL = box(0.3, 0.15, 0.1, matLightRear);
    tailL.position.set(-0.6, wheelY + 0.45, -l / 2 + 0.2);
    group.add(tailL);
    const tailR = tailL.clone();
    tailR.position.set(0.6, wheelY + 0.45, -l / 2 + 0.2);
    group.add(tailR);

    // 4. Cabin (Greenhouse)
    const cabin = box(w - 0.2, hCabin, l * 0.45, paint);
    cabin.position.set(0, wheelY + hChassis + hCabin / 2 - 0.05, -0.1);
    group.add(cabin);

    // Windows
    const windF = box(w - 0.25, hCabin - 0.1, 0.1, matGlass);
    windF.position.set(0, wheelY + hChassis + 0.25, l * 0.22);
    windF.rotation.x = -0.2;
    group.add(windF);

    const windR = box(w - 0.25, hCabin - 0.1, 0.1, matGlass);
    windR.position.set(0, wheelY + hChassis + 0.25, -l * 0.35);
    windR.rotation.x = 0.2;
    group.add(windR);

    addWindows(group, w - 0.15, hCabin - 0.15, l * 0.35, cabin.position);

    // 5. Taxi Sign (Detailed)
    const signBar = box(0.1, 0.05, 1.0, matPlastic); // Mounting bar
    signBar.position.set(0, wheelY + hChassis + hCabin, -0.1);
    group.add(signBar);

    const sign = box(0.6, 0.2, 0.25, matLightFront);
    sign.material = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Glow yellow
    sign.position.set(0, wheelY + hChassis + hCabin + 0.15, -0.1);
    group.add(sign);

    // Ad Text (Simulated with black boxes)
    const ad = box(0.4, 0.1, 0.26, matPlastic);
    ad.position.copy(sign.position);
    group.add(ad);

    // 6. Mirrors
    const mirL = box(0.2, 0.1, 0.1, paint);
    mirL.position.set(-w / 2 - 0.05, wheelY + hChassis + 0.1, 0.8);
    group.add(mirL);
    const mirR = mirL.clone();
    mirR.position.set(w / 2 + 0.05, wheelY + hChassis + 0.1, 0.8);
    group.add(mirR);

    addWheels(group, w, 2.9, 0.35);
}

function buildSUV(group, paint) {
    const w = 2.1, l = 4.9, hChassis = 0.65, hCabin = 0.6;
    const wheelY = 0.42;

    // 1. Chassis (High Clearance)
    const chassis = box(w, hChassis, l - 0.2, paint);
    chassis.position.set(0, wheelY + hChassis / 2, 0);
    group.add(chassis);

    // 2. Rugged Bumpers (Dark Grey/Black)
    const bumperF = box(w, 0.4, 0.35, matPlastic);
    bumperF.position.set(0, wheelY + 0.25, l / 2 - 0.1);
    group.add(bumperF);

    const bumperR = box(w, 0.4, 0.35, matPlastic);
    bumperR.position.set(0, wheelY + 0.25, -l / 2 + 0.1);
    group.add(bumperR);

    // Bull Bar (Front Push Bar)
    const bullBar = box(1.2, 0.3, 0.1, matChrome);
    bullBar.position.set(0, wheelY + 0.3, l / 2 + 0.1);
    group.add(bullBar);

    // 3. Grille (Vertical Slats - Jeep/Truck style)
    const grille = box(1.0, 0.4, 0.1, matPlastic);
    grille.position.set(0, wheelY + 0.5, l / 2);
    group.add(grille);

    // Lights
    const headL = box(0.35, 0.25, 0.1, matLightFront);
    headL.position.set(-0.7, wheelY + 0.6, l / 2);
    group.add(headL);
    const headR = headL.clone();
    headR.position.set(0.7, wheelY + 0.6, l / 2);
    group.add(headR);

    const tailL = box(0.2, 0.5, 0.1, matLightRear);
    tailL.position.set(-0.7, wheelY + 0.6, -l / 2 + 0.05);
    group.add(tailL);
    const tailR = tailL.clone();
    tailR.position.set(0.7, wheelY + 0.6, -l / 2 + 0.05);
    group.add(tailR);

    // 4. Cabin (Boxy / Utility)
    const cabin = box(w - 0.1, hCabin, l * 0.55, paint);
    cabin.position.set(0, wheelY + hChassis + hCabin / 2 - 0.05, 0.1);
    group.add(cabin);

    // Windows
    // Windshield (Less raked than sedan)
    const windF = box(w - 0.15, hCabin - 0.1, 0.1, matGlass);
    windF.position.set(0, wheelY + hChassis + 0.25, l * 0.27);
    windF.rotation.x = -0.2;
    group.add(windF);

    // Rear Windshield (Vertical)
    const windR = box(w - 0.15, hCabin - 0.1, 0.1, matGlass);
    windR.position.set(0, wheelY + hChassis + 0.25, -l * 0.27 + 0.1);
    group.add(windR);

    // Side Windows
    addWindows(group, w - 0.05, hCabin - 0.15, l * 0.45, cabin.position);

    // 5. Roof Rails
    const railL = box(0.1, 0.1, l * 0.5, matChrome);
    railL.position.set(-w / 2 + 0.3, wheelY + hChassis + hCabin, 0.1);
    group.add(railL);
    const railR = railL.clone();
    railR.position.set(w / 2 - 0.3, wheelY + hChassis + hCabin, 0.1);
    group.add(railR);

    // Crossbars
    const bar1 = box(w - 0.6, 0.05, 0.05, matPlastic);
    bar1.position.set(0, wheelY + hChassis + hCabin, 0.8);
    group.add(bar1);
    const bar2 = bar1.clone();
    bar2.position.set(0, wheelY + hChassis + hCabin, -0.6);
    group.add(bar2);

    // 6. Running Boards (Side Steps)
    const stepL = box(0.3, 0.1, l * 0.5, matPlastic); // Dark plastic/metal
    stepL.position.set(-w / 2 - 0.1, wheelY + 0.15, 0);
    group.add(stepL);
    const stepR = stepL.clone();
    stepR.position.set(w / 2 + 0.1, wheelY + 0.15, 0);
    group.add(stepR);

    // 7. Spare Tire (Rear Mounted)
    const spareGeom = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 16);
    spareGeom.rotateX(Math.PI / 2);
    const spare = new THREE.Mesh(spareGeom, matRubber); // Covered or bare? Bare for now
    spare.position.set(0, wheelY + hChassis + 0.1, -l / 2 - 0.1);
    spare.castShadow = true;
    group.add(spare);

    addWheels(group, w + 0.1, 2.9, 0.45);
}

function buildSport(group, paint) {
    const w = 2.0, l = 4.6, hChassis = 0.45, hCabin = 0.45;
    const wheelY = 0.35;

    // --- AGGRESSIVE LOW PROFILE CHASSIS ---

    // 1. Central Tub (Floor)
    const tub = box(w - 0.2, hChassis, l * 0.8, paint);
    tub.position.set(0, wheelY + hChassis / 2, 0);
    group.add(tub);

    // 2. Widebody Rear Fenders (Hips)
    const phenR = box(0.4, hChassis + 0.15, 1.4, paint);
    phenR.position.set(w / 2 - 0.2, wheelY + hChassis / 2 + 0.05, -1.2);
    group.add(phenR);
    const phenL = phenR.clone();
    phenL.position.set(-w / 2 + 0.2, wheelY + hChassis / 2 + 0.05, -1.2);
    group.add(phenL);

    // 3. Side Intakes (Black Cutouts)
    const intake = box(0.2, 0.4, 0.6, matPlastic);
    intake.position.set(w / 2 - 0.2, wheelY + 0.4, -0.2);
    group.add(intake);
    const intakeL = intake.clone();
    intakeL.position.set(-w / 2 + 0.2, wheelY + 0.4, -0.2);
    group.add(intakeL);

    // 4. Nose (Sloped / Dropped)
    const nose = box(w, hChassis - 0.1, 1.2, paint);
    nose.position.set(0, wheelY + 0.2, 1.8);
    nose.rotation.x = 0.1; // Slope down
    group.add(nose);

    // 5. Front Splitter (Carbon)
    const splitter = box(w + 0.1, 0.05, 0.5, matPlastic);
    splitter.position.set(0, wheelY + 0.1, 2.2);
    group.add(splitter);

    // --- CABIN (Bubble / Fighter Jet style) ---
    const cabin = box(w - 0.5, hCabin, l * 0.35, paint);
    cabin.position.set(0, wheelY + hChassis + hCabin / 2 - 0.05, 0.1);
    group.add(cabin);

    // Windshield (Raked)
    const wind = box(w - 0.55, hCabin - 0.1, 1.2, matGlass);
    wind.position.set(0, wheelY + hChassis + hCabin / 2 - 0.05, 0.3);
    wind.rotation.x = -0.3; // Rake back
    group.add(wind);

    // Louvered Rear Deck (Engine Cover)
    const deck = box(w - 0.6, 0.1, 1.5, matPlastic); // Black slats
    deck.position.set(0, wheelY + hChassis + 0.3, -1.0);
    deck.rotation.x = -0.15; // Slope to tail
    group.add(deck);

    // --- REAR DIFFUSER & AERO ---
    // Diffuser
    const diff = box(w - 0.4, 0.2, 0.5, matPlastic);
    diff.position.set(0, wheelY + 0.15, -l / 2 + 0.1);
    group.add(diff);

    // Giant Wing
    const wingH = wheelY + hChassis + 0.6;
    const wing = box(w + 0.2, 0.05, 0.4, paint);
    wing.position.set(0, wingH, -l / 2 + 0.2);
    group.add(wing);

    // Wing Struts (Swan neck?)
    const str1 = box(0.05, 0.4, 0.2, matPlastic);
    str1.position.set(-0.5, wingH - 0.2, -l / 2 + 0.3);
    group.add(str1);
    const str2 = str1.clone();
    str2.position.set(0.5, wingH - 0.2, -l / 2 + 0.3);
    group.add(str2);

    addWheels(group, w + 0.1, 2.7, 0.38);
}

function buildTruck(group, paint) {
    // Heavy Duty Pickup
    const w = 2.4, l = 5.8, hFrame = 0.6;
    const wheelY = 0.5;

    // 1. Frame (Chassis Lifted)
    const frame = box(w - 0.4, hFrame, l, matPlastic);
    frame.position.set(0, wheelY + hFrame / 2, 0);
    group.add(frame);

    // 2. Cab (Crew Cab)
    const hCab = 1.3;
    const lCab = 2.2;
    const cab = box(w, hCab, lCab, paint);
    cab.position.set(0, wheelY + hFrame + hCab / 2 - 0.1, l / 2 - lCab / 2 - 0.2);
    group.add(cab);

    // Cab Windows
    const windF = box(w - 0.1, 0.7, 0.1, matGlass);
    windF.position.set(0, wheelY + hFrame + 0.8, l / 2 - 0.3);
    windF.rotation.x = -0.15;
    group.add(windF);

    const windR = box(w - 0.4, 0.5, 0.1, matGlass);
    windR.position.set(0, wheelY + hFrame + 0.9, l / 2 - lCab + 0.25); // Back of cab
    group.add(windR);

    // Side Windows
    addWindows(group, w - 0.05, 0.6, lCab - 0.6, cab.position);

    // 3. Bed (Long Bed)
    const lBed = 2.6;
    const hBed = 0.8;
    const zBed = l / 2 - lCab - 0.2 - lBed / 2; // Behind cab

    // Bed Sides (Fenders)
    // Left
    const bedL = box(0.2, hBed, lBed, paint);
    bedL.position.set(-w / 2 + 0.1, wheelY + hFrame + hBed / 2, -l / 2 + lBed / 2 + 0.4);
    group.add(bedL);

    // Right
    const bedR = bedL.clone();
    bedR.position.set(w / 2 - 0.1, wheelY + hFrame + hBed / 2, -l / 2 + lBed / 2 + 0.4);
    group.add(bedR);

    // Bed Floor
    const bedFloor = box(w - 0.4, 0.1, lBed, paint);
    bedFloor.position.set(0, wheelY + hFrame + 0.4, -l / 2 + lBed / 2 + 0.4);
    group.add(bedFloor);

    // Tailgate
    const tailgate = box(w, hBed, 0.15, paint);
    tailgate.position.set(0, wheelY + hFrame + hBed / 2, -l / 2 + 0.4);
    group.add(tailgate);

    // Bed Headboard (behind cab)
    const headboard = box(w, hBed, 0.1, paint);
    headboard.position.set(0, wheelY + hFrame + hBed / 2, -l / 2 + lBed + 0.3);
    group.add(headboard);


    // 4. Bumpers (Heavy Steel)
    const bumperF = box(w, 0.4, 0.3, matChrome);
    bumperF.position.set(0, wheelY + 0.2, l / 2 - 0.15);
    group.add(bumperF);

    const bumperR = box(w, 0.3, 0.3, matChrome);
    bumperR.position.set(0, wheelY + 0.3, -l / 2 + 0.4); // Stick out past tailgate
    group.add(bumperR);

    // 5. Grille (Massive Chrome)
    const grille = box(1.4, 0.6, 0.1, matChrome);
    grille.position.set(0, wheelY + 0.8, l / 2);
    group.add(grille);

    // Lights
    const headL = box(0.3, 0.4, 0.1, matLightFront);
    headL.position.set(-0.9, wheelY + 0.8, l / 2);
    group.add(headL);
    const headR = headL.clone();
    headR.position.set(0.9, wheelY + 0.8, l / 2);
    group.add(headR);

    const tailL = box(0.15, 0.5, 0.1, matLightRear);
    tailL.position.set(-w / 2 + 0.1, wheelY + 0.6, -l / 2 + 0.45);
    group.add(tailL);
    const tailR = tailL.clone();
    tailR.position.set(w / 2 - 0.1, wheelY + 0.6, -l / 2 + 0.45);
    group.add(tailR);

    // 6. Towing Mirrors
    const mirL = box(0.1, 0.1, 0.3, matPlastic); // Arm
    mirL.position.set(-w / 2 - 0.2, wheelY + hFrame + 0.5, 1.5);
    group.add(mirL);
    const mirHeadL = box(0.1, 0.4, 0.2, matPlastic); // Head
    mirHeadL.position.set(-w / 2 - 0.4, wheelY + hFrame + 0.5, 1.5);
    group.add(mirHeadL);

    const mirR = mirL.clone();
    mirR.position.set(w / 2 + 0.2, wheelY + hFrame + 0.5, 1.5);
    group.add(mirR);
    const mirHeadR = mirHeadL.clone();
    mirHeadR.position.set(w / 2 + 0.4, wheelY + hFrame + 0.5, 1.5);
    group.add(mirHeadR);

    // 7. Running Boards
    const stepL = box(0.3, 0.1, lCab, matChrome);
    stepL.position.set(-w / 2 - 0.15, wheelY + 0.3, l / 2 - lCab / 2 - 0.2);
    group.add(stepL);
    const stepR = stepL.clone();
    stepR.position.set(w / 2 + 0.15, wheelY + 0.3, l / 2 - lCab / 2 - 0.2);
    group.add(stepR);

    addWheels(group, w + 0.2, 3.8, 0.6);
}

function buildBus(group, paint) {
    const w = 2.6, l = 9.0, h = 2.8;
    const wheelY = 0.5;

    // 1. Main Body (Modern Transit Style)
    const bodyH = h - 0.5; // Lift for wheels
    const body = box(w, bodyH, l, paint);
    body.position.set(0, wheelY + 0.5 + bodyH / 2 - 0.2, 0);
    group.add(body);

    // 2. Roof Unit (AC / Vents)
    const ac = box(w - 0.4, 0.4, 3.0, matPlastic);
    ac.position.set(0, wheelY + 0.5 + bodyH + 0.1, -1.0);
    group.add(ac);

    const vent = box(w - 0.8, 0.2, 1.5, matPlastic);
    vent.position.set(0, wheelY + 0.5 + bodyH, 2.0);
    group.add(vent);

    // 3. Greenhouse (Windows)
    // Continuous strip effect using black glass
    const sideGlassL = box(0.1, 1.2, l - 1.5, matGlass);
    sideGlassL.position.set(-w / 2 - 0.05, wheelY + 2.0, 0);
    group.add(sideGlassL);

    const sideGlassR = sideGlassL.clone();
    sideGlassR.position.set(w / 2 + 0.05, wheelY + 2.0, 0);
    group.add(sideGlassR);

    // Windshield (Large)
    const wind = box(w - 0.2, 1.4, 0.1, matGlass);
    wind.position.set(0, wheelY + 1.8, l / 2 + 0.05);
    wind.rotation.x = -0.05; // Slight rake
    group.add(wind);

    // Rear Window
    const rearWind = box(w - 0.4, 1.0, 0.1, matGlass);
    rearWind.position.set(0, wheelY + 2.1, -l / 2 - 0.05);
    group.add(rearWind);

    // 4. Doors (Passenger side - Right)
    const doorF = box(0.15, 2.0, 1.2, matPlastic); // Dark door frame
    doorF.position.set(w / 2 + 0.02, wheelY + 1.2, l / 2 - 1.2);
    group.add(doorF);

    const doorR = box(0.15, 2.0, 1.2, matPlastic);
    doorR.position.set(w / 2 + 0.02, wheelY + 1.2, -0.5);
    group.add(doorR);

    // 5. Destination Board (Front)
    const dest = box(w - 0.4, 0.3, 0.2, matPlastic); // Box
    dest.position.set(0, wheelY + 2.8, l / 2);
    group.add(dest);

    // Glowing Text Area
    const destText = box(w - 0.6, 0.2, 0.22, matLightFront);
    destText.material = new THREE.MeshBasicMaterial({ color: 0xffaa00 }); // Orange LED
    destText.position.set(0, wheelY + 2.8, l / 2);
    group.add(destText);

    // 6. Lights
    // Headlights
    const hl = box(0.25, 0.25, 0.1, matLightFront);
    hl.position.set(-w / 2 + 0.4, wheelY + 0.8, l / 2 + 0.05);
    group.add(hl);
    const hr = hl.clone();
    hr.position.set(w / 2 - 0.4, wheelY + 0.8, l / 2 + 0.05);
    group.add(hr);

    // Taillights
    const tl = box(0.15, 0.4, 0.1, matLightRear);
    tl.position.set(-w / 2 + 0.3, wheelY + 1.2, -l / 2 - 0.05);
    group.add(tl);
    const tr = tl.clone();
    tr.position.set(w / 2 - 0.3, wheelY + 1.2, -l / 2 - 0.05);
    group.add(tr);

    // 7. Mirrors (Huge bus mirrors)
    const mirL = box(0.1, 0.6, 0.1, matPlastic); // Arm
    mirL.position.set(-w / 2 - 0.1, wheelY + 2.5, l / 2 - 0.2);
    mirL.rotation.z = 0.5;
    group.add(mirL);
    const mirHeadL = box(0.2, 0.5, 0.1, matPlastic); // Mirror
    mirHeadL.position.set(-w / 2 - 0.4, wheelY + 2.8, l / 2 - 0.1);
    group.add(mirHeadL);

    const mirR = box(0.1, 0.6, 0.1, matPlastic); // Arm
    mirR.position.set(w / 2 + 0.1, wheelY + 2.5, l / 2 - 0.2);
    mirR.rotation.z = -0.5;
    group.add(mirR);
    const mirHeadR = box(0.2, 0.5, 0.1, matPlastic); // Mirror
    mirHeadR.position.set(w / 2 + 0.4, wheelY + 2.8, l / 2 - 0.1);
    group.add(mirHeadR);

    // Wheels (6 wheels - Dual rear)
    addWheels(group, w - 0.3, 5.5, 0.55); // Front
    // Extra rear wheels visual hack? Just make rear cylinder wider or add inside?
    // Let's just stick to 4 big ones for simplicity or add extra set
}

// --- HELPERS ---

function box(w, h, d, mat) {
    const geom = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geom, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}

function addWindows(group, w, h, d, pos) {
    // Simply a slightly larger box for now, intersected with cabin
    // Or just 4 planes. Let's do a box for solidity.
    const glass = box(w + 0.05, h, d + 0.05, matGlass);
    glass.position.copy(pos);
    group.add(glass);
}

function addBumpers(group, w, y, zOffset) {
    const h = 0.25;
    const d = 0.2;

    const front = box(w, h, d, matPlastic);
    front.position.set(0, y, zOffset);
    group.add(front);

    const back = box(w, h, d, matPlastic);
    back.position.set(0, y, -zOffset);
    group.add(back);

    // Lights
    const head = box(0.4, 0.15, 0.1, matLightFront);
    head.position.set(-w / 2 + 0.4, y + 0.1, zOffset + 0.1);
    group.add(head);
    const head2 = head.clone();
    head2.position.set(w / 2 - 0.4, y + 0.1, zOffset + 0.1);
    group.add(head2);

    const tail = box(0.4, 0.15, 0.1, matLightRear);
    tail.position.set(-w / 2 + 0.4, y + 0.1, -zOffset - 0.1);
    group.add(tail);
    const tail2 = tail.clone();
    tail2.position.set(w / 2 - 0.4, y + 0.1, -zOffset - 0.1);
    group.add(tail2);
}

function addWheels(group, wBody, wheelbase, radius = 0.35) {
    const wWheel = 0.25;
    const x = wBody / 2 - 0.1; // Inset slightly
    const z = wheelbase / 2;
    const y = radius;

    const makeWheel = () => {
        const g = new THREE.Group();
        // Tire
        const tireGeom = new THREE.CylinderGeometry(radius, radius, wWheel, 24);
        tireGeom.rotateZ(Math.PI / 2);
        const tire = new THREE.Mesh(tireGeom, matRubber);
        tire.castShadow = true;
        g.add(tire);

        // Rim
        const rimGeom = new THREE.CylinderGeometry(radius * 0.6, radius * 0.6, wWheel + 0.02, 12);
        rimGeom.rotateZ(Math.PI / 2);
        const rim = new THREE.Mesh(rimGeom, matRim);
        g.add(rim);

        return g;
    }

    const fl = makeWheel(); fl.position.set(-x, y, z); group.add(fl);
    const fr = makeWheel(); fr.position.set(x, y, z); group.add(fr);
    const bl = makeWheel(); bl.position.set(-x, y, -z); group.add(bl);
    const br = makeWheel(); br.position.set(x, y, -z); group.add(br);
}

function pickColor(type) {
    if (type === 'taxi') return 0xffcc00;
    if (type === 'bus') return Math.random() < 0.5 ? 0x3366cc : 0xcc3333;
    if (type === 'truck') return 0x885533;

    // Random civ car
    const colors = [
        0x111111, // Black
        0xeeeeee, // White
        0x888888, // Silver
        0xcc0000, // Red
        0x0033cc, // Blue
        0x225522, // Green
        0x550000  // Burgundy
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
