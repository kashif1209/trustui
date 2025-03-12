import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work - Finsbury Trust',
  description: 'Discover the impact of Finsbury Trust through our community initiatives and recent events.',
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 