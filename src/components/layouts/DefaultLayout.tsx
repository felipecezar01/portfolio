'use client';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {

  return (
    <div className="min-h-screen bg-darken-900">
      {children}
    </div>
  );
};

export default DefaultLayout;
