'use client';

import { useHeader } from '@/components/header-context';
import { HeaderDefault } from './header/header-default';
import { HeaderModern } from './header/header-modern';
import { HeaderMinimal } from './header/header-minimal';
import { HeaderPremium } from './header/header-premium';

const Header = () => {
  const { variant } = useHeader();

  switch (variant) {
    case 'modern':
      return <HeaderModern />;
    case 'minimal':
      return <HeaderMinimal />;
    case 'premium':
      return <HeaderPremium />;
    default:
      return <HeaderDefault />;
  }
};

export default Header;
