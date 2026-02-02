import React from 'react';

export type Emotion = 'Happy' | 'Sad' | 'Angry' | 'Mad' | 'Surprised' | 'Fear' | 'Neutral';

export const SUPPORTED_EMOTIONS: Emotion[] = ['Happy', 'Sad', 'Angry', 'Mad', 'Surprised', 'Fear', 'Neutral'];

export interface EmotionData {
  emoji: string;
  color: string;
  pulseColor: string;
}

export type ActivityName = 'Mood Boost' | 'Give Gift' | 'Play Music' | 'Exercise' | 'Meditate' | 'Tell Story';

export interface Activity {
  name: ActivityName;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error in a .ts file.
  icon: (props: React.ComponentProps<'svg'>) => React.ReactElement;
  color: string;
  duration: number; // in seconds
}

export interface ActivityLog {
  id: string;
  activityName: ActivityName;
  completedAt: number; // timestamp
}

export interface EmotionLog {
    id: string;
    emotion: Emotion;
    detectedAt: number; // timestamp
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'companion';
  timestamp: number;
}

export type Tab = 'live' | 'chat' | 'activities' | 'stats' | 'settings';

export type ConnectionStatus = 'connected' | 'disconnected' | 'connecting' | 'error';