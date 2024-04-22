import { useRef, useEffect } from "react";
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  ScrollableCameraViewPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
//potate
import "./phonepage.css";

gsap.registerPlugin(ScrollTrigger);

function Phonepage() {
  const canvasRef = useRef(null);
  const objectRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".second-phone", {
      xPercent: "-140",
      opacity: 100,
      transform: "translateX(0)",
      scrollTrigger: {
        trigger: ".second-phone",
        start: "top center",
        end: "bottom 90%",
        markers: true,
        scrub: true,
      },
    });

    tl.to(".third-phone", {
      xPercent: "-190",
      opacity: 100,
      scrollTrigger: {
        trigger: ".third-phone",
        start: "top center",
        end: "bottom 99%",
        markers: true,
        scrub: true,
      },
    });

    tl.to(".fourth-phone", {
      xPercent: "-170",
      opacity: 100,
      scrollTrigger: {
        trigger: ".fourth-phone",
        start: "top center",
        end: "bottom 99%",
        markers: true,
        scrub: true,
      },
    });

    tl.to(".fifth-phone", {
      xPercent: "200",
      opacity: 100,
      scrollTrigger: {
        trigger: ".fifth-phone",
        start: "top center",
        end: "bottom 99%",
        markers: true,
        scrub: true,
      },
    });

    tl.to(".sixth-phone", {
      xPercent: "-200",
      opacity: 100,
      scrollTrigger: {
        trigger: ".sixth-phone",
        start: "top center",
        end: "bottom 99%",
        markers: true,
        scrub: true,
      },
    });
  });

  useEffect(() => {
    let viewer;
    // const script = document.createElement('script')
    // script.src = "frontend/pages/PotatePage/potate.ts"
    // script.async =true;
    // document.body.appendChild(script)
    const setupViewer = async () => {
      viewer = new ViewerApp({
        canvas: canvasRef.current,
      });

      gsap.registerPlugin(ScrollTrigger);

      try {
        // Add plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin);
        await viewer.addPlugin(ScrollableCameraViewPlugin);

        // Add all the plugins at once
        await addBasePlugins(viewer, { interactionPrompt: false });

        // This must be called after adding any plugin that changes the render pipeline.
        viewer.renderer.refreshPipeline();

        // Load a 3D model
        const object = await manager.addFromPath("/phone.glb");

        // Set the reference to the 3D object
        objectRef.current = object;

        // Start animations
        //  viewer.dispose()
      } catch (error) {
        console.error("Error setting up viewer:", error);
        // Handle error (e.g., show error message to user)
      }
    };

    setupViewer();
    return () => {
      // Dispose of the viewer
      if (viewer) {
        viewer.dispose();
      }
    };
  }, []);

  return (
    <div>
      <section className="section-phone">
        <h1 className="h1-phone">iPhone 15 Pro Max</h1>
      </section>

      <section className="section-phone second-phone">
        <div className="section-two-container">
          <h2 className="h2-phone">Power Up Faster Than Ever</h2>
          <p className="p-phone">
            Experience lightning-fast charging with the iPhone 15 Pro Max. With
            its advanced technology, enjoy up to 50% charge in just 30 minutes,
            ensuring you stay powered up for whatever your day brings.
          </p>
        </div>
      </section>

      <section className="section-phone third-phone">
        <div className="section-two-container elevate-photography">
          <h2 className="h2-phone">Elevate Your Photography</h2>
          <p className="p-phone">
            Capture life's moments in stunning detail with the iPhone 15 Pro Max
            camera. From breathtaking landscapes to close-up portraits, its
            advanced triple-camera system delivers professional-quality photos
            and videos, even in low light. With features like ProRAW and
            Cinematic Mode, unleash your creativity like never before.
          </p>
        </div>
      </section>

      <section className="section-phone fourth-phone">
        <div className="section-two-container craftsmanship-section">
          <h2 className="h2-phone">Exquisite Craftsmanship</h2>
          <p className="p-phone">
            Crafted with aerospace-grade aluminum and precision-milled matte
            glass, the iPhone 15 Pro Max boasts durability and elegance.
            Featuring a Ceramic Shield front cover for enhanced protection, it's
            a masterpiece of premium materials and craftsmanship.
          </p>
        </div>
      </section>

      <section className="section-phone fifth-phone">
        <div className="section-two-container selfie-section">
          <h2 className="h2-phone">Selfie Perfection</h2>
          <p className="p-phone">
            Unlock the potential of your selfies with the iPhone 15 Pro Max
            front camera. Featuring TrueDepth technology, it captures stunning
            portraits with remarkable detail and depth. With Night mode and
            Smart HDR 4, every selfie shines, day or night, ensuring you always
            look your best
          </p>
        </div>
      </section>

      <section className="section-phone sixth-phone">
        <div className="section-two-container Brilliance">
          <h2 className="h2-phone">Brilliance in Every Pixel</h2>
          <p className="p-phone">
            Experience brilliance with the iPhone 15 Pro Max display. Its Super
            Retina XDR OLED screen offers vivid colors and deep blacks, while
            ProMotion technology ensures smooth, responsive interactions at up
            to 120Hz.
          </p>
        </div>
      </section>

      <div id="webgi-canvas-container">
        <canvas id="webgi-canvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
export default Phonepage;
