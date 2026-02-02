import { Emotion, EmotionData, Activity, ActivityName } from './types';
import { HeartIcon, GiftIcon, MusicNoteIcon, SparklesIcon, FireIcon, BookOpenIcon, BeakerIcon } from './components/Icons';

export const EMOTION_DETAILS: Record<Emotion, EmotionData> = {
  // FIX: Changed pulseColor from a Tailwind class to a hex color for use in inline styles.
  Happy: { emoji: '😊', color: 'text-yellow-400', pulseColor: '#fcd34d' },
  Sad: { emoji: '😢', color: 'text-blue-400', pulseColor: '#93c5fd' },
  Angry: { emoji: '😠', color: 'text-red-500', pulseColor: '#f87171' },
  Mad: { emoji: '😡', color: 'text-red-700', pulseColor: '#dc2626' },
  Surprised: { emoji: '😲', color: 'text-purple-400', pulseColor: '#d8b4fe' },
  Fear: { emoji: '😨', color: 'text-indigo-400', pulseColor: '#a5b4fc' },
  Neutral: { emoji: '😐', color: 'text-gray-400', pulseColor: '#d1d5db' },
  Disgust: { emoji: '🤢', color: 'text-lime-500', pulseColor: '#84cc16' },
};

export const ACTIVITIES: Record<ActivityName, Activity> = {
  'Mood Boost': { name: 'Mood Boost', icon: SparklesIcon, color: 'from-yellow-400 to-orange-400', duration: 30 },
  'Give Gift': { name: 'Give Gift', icon: GiftIcon, color: 'from-pink-400 to-rose-400', duration: 10 },
  'Play Music': { name: 'Play Music', icon: MusicNoteIcon, color: 'from-sky-400 to-cyan-400', duration: 180 },
  'Exercise': { name: 'Exercise', icon: FireIcon, color: 'from-red-500 to-orange-500', duration: 300 },
  'Meditate': { name: 'Meditate', icon: BeakerIcon, color: 'from-purple-500 to-indigo-500', duration: 600 },
  'Tell Story': { name: 'Tell Story', icon: BookOpenIcon, color: 'from-green-400 to-emerald-400', duration: 120 },
};