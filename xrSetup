export function initXR(renderer) {
    const button = document.createElement('button');
    button.innerText = "Enter VR";

    button.onclick = async () => {
        const session = await navigator.xr.requestSession('immersive-vr');
        renderer.xr.setSession(session);
    };

    return button;
}
