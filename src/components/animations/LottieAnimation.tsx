import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

// Simple coding animation data
const codingAnimation = {
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 120,
  "w": 400,
  "h": 400,
  "nm": "Coding Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Code",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 1, "k": [
          {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
          {"t": 120, "s": [360]}
        ]},
        "p": {"a": 0, "k": [200, 200, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 1, "k": [
          {"i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]}, "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]}, "t": 0, "s": [100, 100, 100]},
          {"i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]}, "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]}, "t": 60, "s": [120, 120, 100]},
          {"t": 120, "s": [100, 100, 100]}
        ]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "rc",
              "d": 1,
              "s": {"a": 0, "k": [100, 100]},
              "p": {"a": 0, "k": [0, 0]},
              "r": {"a": 0, "k": 10}
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.545, 0.365, 0.961, 1]},
              "o": {"a": 0, "k": 100}
            }
          ]
        }
      ],
      "ip": 0,
      "op": 120,
      "st": 0
    }
  ]
};

const LottieAnimation = () => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.8);
    }
  }, []);

  return (
    <div className="w-full h-64 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4">
          <Lottie
            lottieRef={lottieRef}
            animationData={codingAnimation}
            loop={true}
            className="w-full h-full"
          />
        </div>
        <div className="text-lg font-semibold text-primary animate-pulse">
          Lottie Animation
        </div>
        <div className="text-sm text-muted-foreground mt-2">
          Smooth vector animations
        </div>
        
        {/* Fallback animated elements */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LottieAnimation;