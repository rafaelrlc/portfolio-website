export const particles_hash = {
  normal_dark: {
    autoPlay: true,
    background: {
      color: {
        value: "#b5b5b5",
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 0,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff",
        },
        opacity: 1,
      },
      enable: false,
    },
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: [],
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle",
        },
        onHover: {
          enable: false,
          mode: [],
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 200,
          duration: 0.4,
          mix: false,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1,
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffff",
              },
              stop: {
                value: "#b5b5b5",
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: "#b5b5b5",
            },
            length: 2000,
          },
        },
      },
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: false,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: "#b5b5b5",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true,
          },
        },
      },
      groups: {},
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: false,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: false,
        size: false,
        speed: 2,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        value: 650,
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        limit: 0,
      },
      opacity: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 0.25,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random",
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#b5b5b5",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        options: {},
        type: "polygon",
      },
      size: {
        random: {
          enable: false,
          minimumValue: 1,
        },
        value: 1,
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random",
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: false,
        },
      },
      rotate: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 30,
          decay: 0,
          sync: false,
        },
        direction: "random",
        path: false,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 3,
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
          particles: {},
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: {
          min: 5,
          max: 15,
        },
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 30,
          decay: 0,
          sync: false,
        },
        direction: "random",
        enable: true,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        speed: {
          angle: {
            min: -7,
            max: 7,
          },
          move: 10,
        },
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 45,
        },
        width: 1,
      },
      links: {
        blink: false,
        color: {
          value: "#fff",
        },
        consent: false,
        distance: 100,
        enable: false,
        frequency: 1,
        opacity: 1,
        shadow: {
          blur: 5,
          color: {
            value: "#b5b5b5",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: [],
  },
  normal_light: {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: "#b5b5b5",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#b5b5b5",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  },
  among: {
    autoPlay: true,
    background: {
      color: {
        value: "#000000",
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#828282",
        },
        opacity: 1,
      },
      enable: false,
    },
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: [],
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle",
        },
        onHover: {
          enable: false,
          mode: [],
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 200,
          duration: 0.4,
          mix: false,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1,
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#828282",
              },
              stop: {
                value: "#000000",
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: "#000000",
            },
            length: 2000,
          },
        },
      },
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: false,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: "#fff",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 20,
            decay: 0,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true,
          },
        },
      },
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 50,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      move: {
        angle: {
          offset: 0,
          value: 10,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "right",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: false,
        size: false,
        speed: 5,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: false,
          width: 1920,
          height: 1080,
        },
        limit: 0,
        value: 200,
      },
      opacity: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
        animation: {
          count: 0,
          enable: false,
          speed: 3,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random",
          minimumValue: 0.1,
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        options: {},
        type: "circle",
      },
      size: {
        random: {
          enable: false,
          minimumValue: 1,
        },
        value: 3,
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random",
        },
      },
      stroke: {
        width: 0,
        color: {
          value: "",
          animation: {
            h: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 0,
              decay: 0,
              sync: false,
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
          },
        },
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 5,
        opacityRate: 0.5,
        sizeRate: 1,
        velocityRate: 1,
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: false,
        },
      },
      rotate: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 3,
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
          particles: {},
        },
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: 25,
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10,
        },
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 45,
        },
        width: 1,
      },
      links: {
        blink: false,
        color: {
          value: "#ffffff",
        },
        consent: false,
        distance: 100,
        enable: false,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: "#000",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: {
      autoPlay: true,
      fill: true,
      life: {
        wait: false,
      },
      rate: {
        quantity: 1,
        delay: 7,
      },
      shape: "square",
      startCount: 0,
      size: {
        mode: "percent",
        height: 0,
        width: 0,
      },
      particles: {
        shape: {
          type: "images",
          options: {
            images: {
              src: "https://cdn140.picsart.com/338602547027211.png?to=crop&type=webp&r=1456x1869&q=85",
              width: 500,
              height: 634,
            },
          },
        },
        size: {
          value: 40,
        },
        move: {
          speed: 10,
          outModes: {
            default: "none",
            right: "destroy",
          },
          straight: true,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
      position: {
        x: -5,
        y: 55,
      },
    },
  },
  normal_dark2: {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#afafaf",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#afafaf",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2.2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 55.94405594405595,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  },
};
