import React from "react";
import { Link, Element } from "react-scroll";

export default function privacy() {
  return (
    <div className="container max-w-6xl mx-auto px-5 py-12">
      <div className="text-center pb-8">
        <Element name="top">
          <h1 className=" text-8xl md:text-6xl sm:text-4xl font-bold">
            Privacy Policy
          </h1>
        </Element>
        <p>Last Updated May 13th, 2023</p>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-4/5 ">
          <p className="mb-6">
            CACSA group built the CACSA app as [open
            source/free/freemium/ad-supported/commercial] app. This SERVICE is
            provided by CACSA group at no cost and is intended for use as is.
          </p>
          <p className="mb-6">
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.
          </p>
          <p className="mb-6">
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p className="mb-6">
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at CACSA unless
            otherwise defined in this Privacy Policy.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Information Collection and Use
          </h2>
          <p className="mb-6">
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to fullname, church name. The information
            that we request will be retained by us and used as described in this
            privacy policy.
          </p>
          <p className="mb-6">
            The app does use third-party services that may collect information
            used to identify you.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Link to the privacy policy of third-party service providers used by
            the app
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>Google Play Services</li>
            <li>Google Analytics for Firebase</li>
          </ul>
          <Element name="data">
            <h2 className="text-2xl font-bold mb-4">Log Data</h2>
          </Element>
          <p className="mb-6">
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third-party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p className="mb-6">
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your devices internal
            memory.
          </p>
          <p className="mb-6">
            This Service does not use these “cookies” explicitly. However, the
            app may use third-party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>
          <h2 className="text-2xl font-bold mb-4">Service Providers</h2>
          <p className="mb-6">
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>To facilitate our Service</li>
            <li>To provide the Service on our behalf</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p className="mb-6">
            We want to inform users of this Service that these third parties
            have access to their Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
          </p>
          <h2 className="text-2xl font-bold mb-4">Security</h2>
          <p className="mb-6">
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
          <h2 className="text-2xl font-bold mb-4">Links to Other Sites</h2>
          <p className="mb-6">
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <h2 className="text-2xl font-bold mb-4">Childrens Privacy</h2>
          <p className="mb-6">
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13 years of age. In the case we discover that a child under 13
            has provided us with personal information, we immediately delete
            this from our servers. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact us so that we will be able to do the necessary
            actions.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>
          <p className="mb-6">This policy is effective as of 2023-05-12</p>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at hello@thinktech.com
          </p>
        </div>
        <div className="w-full fixed right-10 md:w-1/5 ">
          <Link to="top" smooth={true} duration={500}>
            <p className="mb-4"> Cacsa group</p>
          </Link>
          <p className="mb-4">Information Collection and use</p>
          <p className="mb-4">
            Link to the privacy policy of third-party service providers used by
            the app
          </p>
          <Link to="data" smooth={true} duration={500}>
            <p className="mb-4">Log Data</p>
          </Link>
          <p className="mb-4">Cookies</p>
          <p className="mb-4">Security</p>
          <p className="mb-4">Links to Other Sites</p>
          <p className="mb-4">Childrens Privacy</p>
          <p className="mb-4">Changes to This Privacy Policy</p>
          <p className="mb-4">Contact Us</p>
        </div>
      </div>
    </div>
  );
}
