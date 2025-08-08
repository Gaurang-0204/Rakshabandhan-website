import React, { useState, useEffect } from 'react';

const RakshaBandhanWish = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showMemories, setShowMemories] = useState(false);

  useEffect(() => {
    // Animate main message
    const timer = setTimeout(() => setShowMessage(true), 1000);
    
    // Create floating particles
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setParticles(particleArray);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-red-100 relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-70"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '3s',
          }}
        />
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Traditional Border Pattern */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 opacity-20"></div>
        
        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-4 border-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-4 border-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-red-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-yellow-300 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header with Rakhi Symbol */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="inline-block p-6 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full shadow-lg mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-3xl text-white font-bold">🎗️</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded"></div>
            <span className="text-2xl">✨</span>
            <div className="w-16 h-1 bg-gradient-to-l from-pink-400 to-transparent rounded"></div>
          </div>
        </div>

        {/* Main Greeting */}
        <div className={`text-center transition-all duration-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent mb-4 animate-pulse">
            Happy Raksha Bandhan
          </h1>
          <div className="text-2xl md:text-3xl text-red-700 font-semibold mb-6">
            Dear Siddhi 💕
          </div>
        </div>

        {/* Message Card */}
<div className={`max-w-2xl mx-auto transition-all duration-1000 delay-500 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-4 border-gradient-to-r from-orange-200 to-pink-200">
    <div className="text-center space-y-4">
      <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
        On this glorious day of <span className="font-bold text-red-600">Raksha Bandhan</span>, 
        you officially decided to make this <span className="font-bold text-orange-600">dumb, annoying, but lovable</span> person your brother.
      </div>
      <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
        Since then, I've made it my life’s mission to protect you, annoy you, and 
        occasionally make you question your life choices… but always with <span className="font-bold text-pink-600">love</span>.
      </div>
      <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
        May our bond grow stronger, our jokes get sillier, and may you always be blessed with 
        <span className="font-bold text-yellow-600"> laughter</span>, <span className="font-bold text-green-600">happiness</span>, 
        and an endless supply of my <span className="font-bold text-blue-600">bad jokes</span>.
      </div>
      <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
        You’re stuck with me for life… and honestly, I think that’s the best gift you could ever get.
      </div>
    </div>
  </div>
</div>

       

        {/* Decorative Elements */}
        <div className={`flex items-center justify-center space-x-8 mt-8 transition-all duration-1000 delay-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-4xl animate-bounce">🌸</div>
          <div className="text-5xl animate-pulse">🎁</div>
          <div className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌺</div>
        </div>

        {/* Footer Message */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-1500 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-xl text-red-600 font-semibold mb-2">
            With All My Love ❤️
          </div>
          <div className="text-lg text-gray-600">
            Your Loving Sibling
          </div>
        </div>

        {/* Interactive Elements */}
        <div className={`mt-12 transition-all duration-1000 delay-2000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={() => {
              // Show memories section
              setShowMemories(true);
              
              // Add celebration animation
              const celebration = document.createElement('div');
              celebration.innerHTML = '🎉🎊✨🌟💫';
              celebration.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-ping pointer-events-none z-50';
              document.body.appendChild(celebration);
              setTimeout(() => document.body.removeChild(celebration), 1000);
            }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
          >
            Send Virtual Rakhi 🎗️
          </button>
        </div>

        {/* Memories Section - Shows after button click */}
        {showMemories && (
          <div className="mt-16 w-full max-w-6xl mx-auto transition-all duration-1000 animate-fadeIn">
            {/* Memories Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-orange-600 bg-clip-text text-transparent mb-4">
                My Favourite Memories of You 💖
              </h2>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-transparent rounded"></div>
                <span className="text-2xl">📸</span>
                <div className="w-20 h-1 bg-gradient-to-l from-orange-400 to-transparent rounded"></div>
              </div>
            </div>

            {/* Photos Section */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                  Our Special Moments 📷
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Photo 1 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-4 border-pink-200 transform hover:scale-105 transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-pink-100 to-orange-100">
                    <h4 className="text-lg font-bold text-red-600 text-center">
                      First Rakhshabandhan ✨
                    </h4>
                  </div>
                  <div className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-pink-200 to-orange-200 rounded-xl flex items-center justify-center border-2 border-dashed border-pink-300">
                      <div className="text-center">
                        
                        {/* Uncomment and add your first image source */}
                        { <img 
                          src="/First.jpg" 
                          alt="First favorite memory" 
                          className="w-full h-full object-cover rounded-xl"
                        /> }
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo 2 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-4 border-pink-200 transform hover:scale-105 transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-orange-100 to-pink-100">
                    <h4 className="text-lg font-bold text-orange-600 text-center">
                      Best Photo I have of you  ✨
                    </h4>
                  </div>
                  <div className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl flex items-center justify-center border-2 border-dashed border-orange-300">
                      <div className="text-center">
                        
                        {/* Uncomment and add your second image source */}
                        { <img 
                          src="/best.jpg" 
                          alt="Second favorite memory" 
                          className="w-full h-full object-cover rounded-xl"
                        /> }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Videos Section */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                  Please Look at these videos They Get funnier As time goes by  🎥
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Video 1 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-200 transform hover:scale-105 transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100">
                    <h4 className="text-lg font-bold text-orange-600 text-center">
                      Fun Video #1 🎬
                    </h4>
                  </div>
                  <div className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200 rounded-xl flex items-center justify-center border-2 border-dashed border-orange-300">
                      <div className="text-center">
                        
                        
                        {/* Uncomment and add your first video source */}
                         <video 
                          controls 
                          className="w-full h-full rounded-xl"
                          poster="/Siddhivideo2.mp4"
                        >
                          <source src="/Siddhivideo2.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video> 
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-4 border-red-200 transform hover:scale-105 transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-red-100 to-pink-100">
                    <h4 className="text-lg font-bold text-red-600 text-center">
                      Fun Video #2 🎬
                    </h4>
                  </div>
                  <div className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-red-200 to-pink-200 rounded-xl flex items-center justify-center border-2 border-dashed border-red-300">
                      <div className="text-center">
                        
                        
                        {/* Uncomment and add your second video source */}
                        { <video 
                          controls 
                          className="w-full h-full rounded-xl"
                          poster="/IMG_1706.mp4"
                        >
                          <source src="/IMG_1706.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video> }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Memory Quote */}
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-4 border-gradient-to-r from-pink-200 to-orange-200">
              <p className="text-xl md:text-2xl text-gray-700 font-medium italic leading-relaxed">
                "Every moment with you is a <span className="font-bold text-pink-600">treasure</span> that I'll 
                <span className="font-bold text-red-600"> cherish</span> forever. Thank you for being the most 
                <span className="font-bold text-orange-600"> amazing sister</span> in the world!" 
                <span className="text-2xl ml-2">💕</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 left-5/6 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default RakshaBandhanWish;
