import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={siteMetadata.image}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Clinical Research Analysis </div>
            <div className="text-gray-500 dark:text-gray-400">and Standardisation</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Transform Untamed Data Efficiently
            </p>
            <p>
              A unified platform combining our AI/ML, software development and clinical research expertise to simplify the process of migrating legacy data to CDISC standards, analysis and reporting.
            </p>
            <p>
              C-RAST has a user friendly interface developed with the help of biostatisticians and data analysts. This makes valuable information at your fingertips at all times.
              C-RAST is powered by ML based black box that will continuously learn along with each study. Accuracy of predictions will help your team to automate further with every step.
              Our intellisense driven IDE will help you write complex programming logic with just a few clicks. Most commonly used functions come pre-loaded while custom built functions can be saved for future use.
              C-RAST gets deployed in the Cloud server, providing authorized access to your studies 24*7. Team members can view completed domains, access datasets, refer to raw files and view study progress in real-time.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
