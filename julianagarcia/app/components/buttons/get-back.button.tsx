"use client"
import { useRouter } from 'next/navigation';
import { icons } from '../icons';
import { bgWater } from '@/app/constants';

export default function BackButton() {
  const router = useRouter();

  const btnStyle = {
    "display": 'flex',
    "alignItems": 'center',
    "padding": '5px 10px',
    "background": bgWater,
    "borderRadius": '5px',
    "color": 'white',
    "gap": '5px'
  }

  return (
    <button type="button" onClick={() => router.back()} style={btnStyle}>
      {icons['ArrowLeft']} Back
    </button>
  );
}
