import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    timeout,
    ProgressivePlugin,
    // TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    DiamondPlugin,
    FrameFadePlugin,
    GLTFAnimationPlugin,
    GroundPlugin,
    BloomPlugin,
    TemporalAAPlugin,
    AnisotropyPlugin,
    GammaCorrectionPlugin,

    addBasePlugins,
    ITexture, TweakpaneUiPlugin, AssetManagerBasicPopupPlugin, CanvasSnipperPlugin,

    IViewerPlugin, FileTransferPlugin,
    ARPlugin,
    PerspectiveCamera, 

    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import "./styles.css";

async function setupViewer(){

    // Initialize the viewer
    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
    })

    // or use this to add all main ones at once.
    await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

    // Add a popup(in HTML) with download progress when any asset is downloading.
    // await viewer.addPlugin(AssetManagerBasicPopupPlugin)

    // Required for downloading files from the UI
    // await viewer.addPlugin(FileTransferPlugin)

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    // await viewer.addPlugin(CanvasSnipperPlugin)

    // Add AR plugin
    // const AR = new ARPlugin();
    // await viewer.addPlugin(ARPlugin)

    // Add a camera to the scene
    const cameraObj = new PerspectiveCamera();
    // viewer.scene.activeCamera = viewer.createCamera(cameraObj);
    viewer.scene.activeCamera = viewer.createCamera(cameraObj);
    const activeCamera = viewer.scene.activeCamera;

    console.log(viewer.scene.activeCamera)

    // Import and add a GLB file.
    // await viewer.load("./assets/Bracelet AR Model 08.glb")
    
    // Load an environment map if not set in the glb file
    // await viewer.setEnvironmentMap("./assets/environment.hdr");

    // Add some UI for tweak and testing.
    // const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin)
    // Add plugins to the UI to see their settings.
    // uiPlugin.setupPlugins<IViewerPlugin>(TonemapPlugin, CanvasSnipperPlugin)

    const ARButton = document.getElementById('arButton') as HTMLButtonElement
    ARButton.onclick = async () => {
        // AR.enterAR();
        console.log("AR Button Clicked!")
        // console.log(xrSession)
    }

}

setupViewer()