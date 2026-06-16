import * as THREE from 'three';

export function createBlockchainScene(scene) {
    const blockGeometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });

    let prevBlock = null;

    for (let i = 0; i < 10; i++) {
        const block = new THREE.Mesh(blockGeometry, material);
        block.position.x = i * 2;

        if (prevBlock) {
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
            const points = [];
            points.push(prevBlock.position);
            points.push(block.position);

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, lineMaterial);
            scene.add(line);
        }

        scene.add(block);
        prevBlock = block;
    }
}
