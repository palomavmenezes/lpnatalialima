import React from 'react';
import Image from 'next/image';

interface Check {
  title: string;
  description: string;
}

interface ContentChecksProps {
  checks: Check[];
}

const ContentChecks: React.FC<ContentChecksProps> = ({ checks }) => {

  return (
    <div className="md:flex md:justify-center mb-5 font-semibold">
      <div className="gap-5 md:grid md:grid-cols-12">
        {checks.map(({ title, description }, index) => (
          <div key={index} className="md:col-span-12">
            <header className='d-flex md:place-items-center'>
              <h6 className='flex gap-4 mt-5 md:text-xl'>
                <Image
                  src="/img/icons/icon-check.svg"
                  width={30}
                  height={30}
                  alt=""
                />
                {title}
              </h6>
            </header>
            <article>
              <p className='font-normal mt-3 w-full max-w-[620px]'>{description}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentChecks;
