import { ReactNode } from "react";
import { LegalPageLayout } from "@/components/LegalPageLayout";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy policy"
      description="Filigran is serious about protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information as you interact with our services."
      contentClassName="max-w-3xl text-base md:text-lg leading-relaxed"
    >
      <div className="space-y-4 text-white/70">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Last update: 2025 - 08 - 05</p>
        <p>
          Filigran is serious about protecting your privacy. This Privacy Policy is designed to inform you about how we
          collect, use your data, and how you can access it and ask for revision or deletion.
        </p>
      </div>

      <LegalSection title="1. REVISIONS TO PRIVACY POLICY">
        <p>
          We will update this Privacy Policy on a regular basis. You can tell if the Policy has been revised since your
          last visit by checking the date at the top of this page.
        </p>
      </LegalSection>

      <LegalSection title="2. CONSENT">
        <p>The use or access of our website hereby signifies your acceptance of the terms of this Privacy Policy.</p>
      </LegalSection>

      <LegalSection title="3. INFORMATION COLLECTED BY US">
        <p>
          Our main goal when collecting any data is to provide you a safe, efficient, and customized experience designed
          to provide our services that most closely meet your needs. The information that we collect depends on the
          nature of how you choose to interact with the website. We only obtain personal information if you voluntarily
          provide it to us.
        </p>
      </LegalSection>

      <LegalSection title="4. COOKIES POLICY">
        <p>
          Cookies are files with small amounts of data that are commonly used as anonymous unique identifiers. These are
          sent to your browser from the website that you visit and are stored on your computer&apos;s hard drive. Our
          website may use these cookies to collect information and to improve our website. We may use cookies to learn
          more about the way you interact with our content and help us to improve your experience when visiting our
          website.
        </p>
        <p>
          We do not use cookies to collect personally identifiable information about you. However, we collect
          information that your browser sends to us called log data. This includes information such as your computer&apos;s
          IP address, browser version, pages of our website that you visit, date and time related data, and other
          statistics.
        </p>
        <p>
          You can choose to block cookies set by us or the websites of any third-party suppliers by changing your browser
          settings. Please note that most browsers automatically accept cookies so if you do not wish cookies to be used,
          you may need to actively delete or block the cookies.
        </p>
      </LegalSection>

      <LegalSection title="5. PERSONAL DATA">
        <p>
          We use the CNIL&apos;s definition: &quot;personal data means any information relating to an identified or
          identifiable individual; an identifiable person is one who can be identified, directly or indirectly, in
          particular by reference to an identification number or one or more factors specific to their physical,
          physiological, mental, economic, cultural or social identity.&quot;
        </p>
        <p>The categories of personal information we may collect include the following:</p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>
            <span className="font-semibold text-white">Personal identifiers:</span> name; email, physical or billing
            addresses; social media handles; telephone numbers; IP address; account numbers; and passwords.
          </li>
          <li>
            <span className="font-semibold text-white">Internet or other electronic activity information:</span> device,
            operating system and browser information; information regarding your interaction with our sites; URLs of the
            pages you visit; mobile application data; logs of browser extension queries; and other usage data.
          </li>
          <li>
            <span className="font-semibold text-white">Professional information:</span> name of current employer or
            company you represent and position(s) you hold; additional professional information you provide to us or
            share with our community.
          </li>
          <li>
            <span className="font-semibold text-white">Commercial information:</span> information about queries,
            analysis, or annotated results that users create by utilizing the services.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. COLLECTION">
        <p>
          We may collect your information when you contact Filigran or choose to interact with us. When using our contact
          form, or asking for a demo, you choose to provide us your personal information. Consent is always obtained to
          process and acquire your personal information.
        </p>
      </LegalSection>

      <LegalSection title="7. USE OF INFORMATION">
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>Better understand your needs and to provide a better experience on our website.</li>
          <li>Operate and maintain the website.</li>
          <li>Detect and protect against error, fraud, and any criminal activity.</li>
          <li>Communicate with you.</li>
          <li>Provide technical support, including updates.</li>
          <li>Develop new products, services, and features.</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. TYPES OF INFORMATION NOT ALLOWED ON THE WEBSITE">
        <p>This list is not exhaustive, but includes:</p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>Nudity or other sexually suggestive content.</li>
          <li>Hate speech.</li>
          <li>Credible threats or direct attacks on an individual or group.</li>
          <li>Content that contains self-harm or excessive violence.</li>
          <li>Content that is deemed illegal by the governing laws.</li>
          <li>Fake or impostor profiles.</li>
          <li>Spam.</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. INFORMATION SHARING POLICY">
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>
            While we will not disclose personally identifiable information that we collect to unaffiliated third parties,
            we reserve the right to provide such information to our affiliates, contractors, and partners to enable them
            to perform services such as improving the website, any related services and features, or maintenance services
            on our behalf.
          </li>
          <li>
            We also reserve the right to disclose such information to any third party for any or all of the following
            reasons: (i) by law; (ii) to comply with legal processes or governmental requests; (iii) to prevent,
            investigate, detect, or prosecute criminal offenses or attacks on the technical integrity of the website; and
            (iv) to protect the rights, property, or safety of our employees, our users, the general public, or you.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="10. DATA RETENTION">
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>Unless a longer retention period is required by law, we will only hold your information for two years.</li>
          <li>Even if we delete your information, it may persist on backup or archival media for legal, tax, or regulatory purposes.</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. A SPECIAL NOTE ABOUT CHILDREN">
        <p>
          We do not knowingly collect any personally identifiable information from children under the age of 18. If you
          think that your child has provided us any information on our website, we strongly encourage you to contact us
          immediately. Adding protection for children while using the internet is a priority for us and we will do our
          best to promptly remove such information from our records.
        </p>
      </LegalSection>

      <LegalSection title="12. CONTACT US">
        <p>
          If you find any discrepancies or have any grievances in relation to this Privacy Policy, please contact us at{" "}
          <a href="mailto:privacy@filigran.io" className="text-cyan hover:text-cyan/80 font-semibold">
            privacy@filigran.io
          </a>{" "}
          or write to:
        </p>
        <address className="not-italic space-y-1">
          <p>Filigran</p>
          <p>66 avenue des Champs Elysées</p>
          <p>75008 Paris</p>
        </address>
      </LegalSection>

      <LegalSection title="13. CLAUSES SPECIFIC TO USERS WHO ARE DOMICILED IN EUROPE">
        <p>
          While we process your data, we strictly adhere to the General Data Protection Regulation (GDPR) currently in
          force throughout Europe and available to all citizens of the European Union. We respect your rights toward the
          use of your personal data, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>Your right to information and access in accordance with Article 15 of the GDPR.</li>
          <li>Your right to rectification under Article 16 GDPR.</li>
          <li>Your right to erasure under Article 17 GDPR.</li>
          <li>Your right to restriction of processing under Article 18 GDPR.</li>
          <li>Your right to refuse data portability under Article 20 GDPR.</li>
        </ul>
        <p>
          If you want to access, rectify, or delete your personal data as stored by us, you can send an email to{" "}
          <a href="mailto:privacy@filigran.io" className="text-cyan hover:text-cyan/80 font-semibold">
            privacy@filigran.io
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="14. CLAUSES SPECIFIC TO USERS FROM CALIFORNIA (UNITED STATES)">
        <p>
          Pursuant to the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), this
          supplemental privacy notice applies solely to consumers residing in California, with whom Filigran may
          interact, and visitors to our website.
        </p>
        <p>Filigran collects personal data in a variety of ways, including:</p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>
            Directly from you, such as through an online form when provided by Filigran for a specific purpose or when
            you otherwise provide us with your information.
          </li>
          <li>Automatically, such as through cookies or other technologies that provide us with information about your use of our services.</li>
        </ul>
        <p>Categories of personal data Filigran collects, processes, and discloses include:</p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>
            Identifiers such as name, email address, online identifiers, internet protocol (IP) address, and other
            similar identifiers and contact information you may provide.
          </li>
          <li>
            Internet or other electronic network activity information such as browsing history, browser type, device
            type, operating system, and dates and times you visit our website.
          </li>
        </ul>
        <p>Filigran processes personal data for the following business and commercial purposes:</p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>Operating our business to present information about Filigran&rsquo;s products and services.</li>
          <li>Communicating with you, responding to your inquiries, and maintaining records of our interactions.</li>
          <li>Complying with transparency requirements and responding to legal processes.</li>
        </ul>
        <h3 className="text-xl font-semibold text-white">
          Filigran does not sell or share, or commercialize your personal information.
        </h3>
        <p>
          California consumers have certain rights with respect to their personal data. You may exercise the rights
          applicable to you by emailing us at{" "}
          <a href="mailto:privacy@filigran.io" className="text-cyan hover:text-cyan/80 font-semibold">
            privacy@filigran.io
          </a>
          .
        </p>
        <p>
          Verification of requests: to make your request, you must provide us with your first and last name, email
          address, city and state of residence, and which of the right(s) described below you are intending to exercise.
          We will verify your request by comparing the information that you provide as part of your request with the
          information (if any) that we have about you in identifiable form. We cannot fulfill any requests that are not
          verified.
        </p>
        <p>California consumer rights include the ability to request:</p>
        <ul className="list-disc pl-6 space-y-2 text-white/70">
          <li>Access to the specific pieces of personal data we have about you or more information about our practices.</li>
          <li>Deletion of personal data that we collected from you.</li>
          <li>Correction of any inaccurate personal data we maintain about you.</li>
        </ul>
        <p>
          We do not sell or share your personal data with any other person or company outside of the Filigran group, and
          we will not discriminate against you for exercising your rights, although some functionality and features
          available on our website may change or no longer be available to you.
        </p>
        <p>
          You may designate an authorized agent to make a request on your behalf by drafting, signing, and authenticating
          a letter that makes clear the identity of your agent and the purposes for which you are appointing the agent.
          If you are an authorized agent, you must provide us with the information described above about the consumer on
          whose behalf you are acting as an agent, as well as your own first and last name and email address, and a
          letter that has been signed by the consumer appointing you as an agent.
        </p>
        <h3 className="text-xl font-semibold text-white">HOW TO CONTACT FILIGRAN</h3>
        <p>If you have any requests, questions, or concerns related to this Supplemental Notice, please contact:</p>
        <address className="not-italic space-y-1">
          <p>Filigran Inc.</p>
          <p>8 The Green # 20799</p>
          <p>Dover, DE 19901</p>
        </address>
      </LegalSection>
    </LegalPageLayout>
  );
};

const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

export default PrivacyPolicy;

