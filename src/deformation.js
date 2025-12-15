import * as THREE from 'three';

export function deformMesh(mesh, impactPoint, radius = 1.0, strength = 0.5) {
    if (!mesh.geometry) return;

    // Ensure geometry works with vertex manipulation
    // If it's a primitive BufferGeometry (like BoxGeometry), we can modify position attribute directly.

    const positions = mesh.geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const localImpact = impactPoint.clone();
    mesh.worldToLocal(localImpact); // Convert impact to local space

    let damaged = false;

    for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);

        const dist = vertex.distanceTo(localImpact);

        if (dist < radius) {
            // Apply deformation: DENT INWARD
            // Instead of random noise, we push the vertex towards the center of the car (crumple).
            // Assuming car center is roughly (0,0,0) in local space, or we can use the mesh center.
            const center = new THREE.Vector3(0, 0, 0); // Local center

            // "Crumple factor": closer to impact = more push
            // But also add SOME noise for jagged edges
            const crumpleAmt = strength * (1 - dist / radius) * 0.8; // Deeper Crumple

            // Push towards center
            vertex.lerp(center, crumpleAmt);

            // Add JAGGERED noise for realism (torn metal)
            // Function of position to be deterministic-ish but messy
            const noiseScale = 0.5;
            vertex.x += (Math.random() - 0.5) * strength * noiseScale;
            vertex.y += (Math.random() - 0.5) * strength * noiseScale;
            vertex.z += (Math.random() - 0.5) * strength * noiseScale;

            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
            damaged = true;
        }
    }

    if (damaged) {
        positions.needsUpdate = true;
        mesh.geometry.computeVertexNormals(); // Re-calculate lighting
    }
}
