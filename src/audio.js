import React, { useState, useEffect } from 'react';

export const AudioVolumeAnalyzer = () => {
  const [audioVolume, setAudioVolume] = useState(0);
  const [recognizedText, setRecognizedText] = useState('');
  const [isAudioStarted, setIsAudioStarted] = useState(false);
  let mediaStream;

  const startAudioAnalysis = () => {
    setIsAudioStarted(true);
  };

  useEffect(() => {
    if (isAudioStarted) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'pt-BR'; // Defina o idioma para português do Brasil

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const transcribedText = event.results[last][0].transcript;
        setRecognizedText(transcribedText);
      };

      recognition.start();

      return () => {
        recognition.stop();
        if (mediaStream) {
          mediaStream.getTracks().forEach((track) => {
            track.stop();
          });
        }
      };
    }
  }, [isAudioStarted]);

  return (
    <div>
      {!isAudioStarted ? (
        <button onClick={startAudioAnalysis}>Iniciar Análise de Áudio</button>
      ) : (
        <div>
          <p>Volume: {audioVolume}</p>
          <p>Texto Reconhecido: {recognizedText}</p>
        </div>
      )}
    </div>
  );
};
