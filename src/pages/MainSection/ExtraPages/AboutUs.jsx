import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div className="mt-5">
            <Helmet>
                <title>About - LifeMark</title>
            </Helmet>
            <div className="text-center">
                <span>----------------------</span>
                <h3 className="text-5xl font-semibold">About Us</h3>
                <span>----------------------</span>
            </div>

            <div className="max-w-lg mx-auto text-justify mt-8">
                <h3 className="text-lg font-medium">Introduction:</h3>
                <p>Begin with a concise yet engaging introduction that encapsulates the essence and mission of the Diagnostics Center. Highlight the core purpose of the center and its commitment to quality healthcare services.</p>
                <h3 className="text-lg font-medium">Mission Statement:</h3>
                <p>Craft a clear, impactful mission statement that defines the centers goals, values, and dedication to providing accurate diagnostic services. Emphasize the commitment to patient care, innovation, and excellence in diagnostics.</p>
                <h3 className="text-lg font-medium">Services Offered:</h3>
                <p>Detail the range of diagnostic services available at the center, such as:

                    Imaging services (MRI, CT scan, X-ray, ultrasound, etc.)
                    Laboratory tests (blood tests, urine analysis, genetic testing, etc.)
                    Specialized diagnostic procedures
                    Preventive health check-up packages</p>
                <h3 className="text-lg font-medium">Patient-Centric Approach:</h3>
                <p>Emphasize the patient experience, comfort, and convenience. Mention personalized care, compassionate staff, and efforts to ensure a seamless and stress-free diagnostic process for patients.</p>
            </div>

        </div>
    );
};

export default AboutUs;