import TopNavbar from "@common/topNavbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/privacyPolicy/")({
    component: PrivacyPolicy,
});

function PrivacyPolicy() {
    return (
        <>
            <div className="min-h-screen bg-[#091B33] relative">
                <div className="sticky top-0">
                    <TopNavbar title={"Privacy Policy"} />
                </div>
                <div className="flex flex-col items-start justify-center gap-5 px-5 text-white py-4 text-lg">
                    <p>
                        This privacy policy applies to the PLAY124 app (hereby referred to as "Application") for mobile
                        devices that was created by (hereby referred to as "Service Provider") as a Free service. This
                        service is intended for use "AS IS".
                    </p>

                    <p>
                        <strong> Information Collection and Use</strong> <br />
                        The Application collects information when you download and use it. This information may include
                        information such as
                    </p>
                    <p>
                        Your device's Internet Protocol address (e.g. IP address) <br />
                        The pages of the Application that you visit, the time and date of your visit, the time spent on
                        those pages
                        <br /> The time spent on the Application
                        <br /> The operating system you use on your mobile device
                    </p>
                    <p>The Application does not gather precise information about the location of your mobile device.</p>
                    <p>
                        The Service Provider may use the information you provided to contact you from time to time to
                        provide you with important information, required notices and marketing promotions.
                    </p>
                    <p>
                        For a better experience, while using the Application, the Service Provider may require you to
                        provide us with certain personally identifiable information, including but not limited to 18.
                        The information that the Service Provider request will be retained by them and used as described
                        in this privacy policy.
                    </p>
                    <p>
                        <strong>Third Party Access</strong> <br />
                        Only aggregated, anonymized data is periodically transmitted to external services to aid the
                        Service Provider in improving the Application and their service. The Service Provider may share
                        your information with third parties in the ways that are described in this privacy statement.
                    </p>
                    <p>
                        <strong>Opt-Out Rights</strong> <br />
                        You can stop all collection of information by the Application easily by uninstalling it. You may
                        use the standard uninstall processes as may be available as part of your mobile device or via
                        the mobile application marketplace or network.
                    </p>

                    <p>
                        <strong> Data Retention Policy</strong> <br />
                        The Service Provider will retain User Provided data for as long as you use the Application and
                        for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have
                        provided via the Application, please contact them at customer.connectplay124@gmail.com and they
                        will respond in a reasonable time.
                    </p>
                    <p>
                        <strong> Children</strong> <br />
                        The Service Provider does not use the Application to knowingly solicit data from or market to
                        children under the age of 13.
                    </p>
                    <p>
                        The Application does not address anyone under the age of 13. The Service Provider does not
                        knowingly collect personally identifiable information from children under 13 years of age. In
                        the case the Service Provider discover that a child under 13 has provided personal information,
                        the Service Provider will immediately delete this from their servers. If you are a parent or
                        guardian and you are aware that your child has provided us with personal information, please
                        contact the Service Provider ({" "}
                        <a href="mailto:customer.connectplay124@gmail.com" className="text-blue-500">
                            customer.connectplay124@gmail.com
                        </a>
                        ) so that they will be able to take the necessary actions.
                    </p>
                    <p>
                        <strong> Security</strong> <br />
                        The Service Provider is concerned about safeguarding the confidentiality of your information.
                        The Service Provider provides physical, electronic, and procedural safeguards to protect
                        information the Service Provider processes and maintains.
                    </p>
                    <p>
                        <strong> Changes</strong> <br />
                        This Privacy Policy may be updated from time to time for any reason. The Service Provider will
                        notify you of any changes to the Privacy Policy by updating this page with the new Privacy
                        Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued
                        use is deemed approval of all changes.
                    </p>
                    <p>Founded and Launched On 15th December 2024</p>

                    <p>
                        <strong> Your Consent</strong> <br />
                        By using the Application, you are consenting to the processing of your information as set forth
                        in this Privacy Policy now and as amended by us.
                    </p>
                    <p>
                        <strong> Contact Us</strong> <br />
                        If you have any questions regarding privacy while using the Application, or have questions about
                        the practices, please contact the Service Provider via email at{" "}
                        <a href="mailto:customer.connectplay124@gmail.com" className="text-blue-500">
                            customer.connectplay124@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
