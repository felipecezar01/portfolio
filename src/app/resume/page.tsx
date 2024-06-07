import { SectionLayout } from '@layouts';

const ContactPage = () => {
  return (
    <SectionLayout className="p-5 lg:px-5 lg:py-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl font-bold text-white">Get My Resume</h2>
        <p className="mt-2 w-full text-center font-body font-light text-greyish-800 lg:w-7/12">
          For a quick overview of my key skills and contact information, please download my resume.
          By clicking the button below, you can access my CV in PDF format, which concisely outlines
          my main competencies and ways to reach me. Thank you for considering my professional
          profile!
        </p>

        <div className="mt-6">
          <a href="/pdfs/cv.pdf" download="FelipeCezarCV">
            <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
              Download My CV
            </button>
          </a>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactPage;
