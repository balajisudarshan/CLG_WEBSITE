import React from 'react'

const Contact = () => {
    return (
        <section className="bg-gray-50 py-16 flex flex-col gap-10">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
                    Contact & Location
                </h2>

                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    <div className="w-full rounded-xl overflow-hidden shadow-lg">

                        <iframe
                            title="NBKR Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.839012938806!2d80.01867527392471!3d14.027555190851807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce293af3006af%3A0x85554323d0d207e8!2sNBKR%20Institute%20Of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1771759117641!5m2!1sen!2sin"
                            className="w-full h-[450px] border-0"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md">

                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                            NBKR Institute of Science & Technology
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                            Vidyanagar, SPSR Nellore District <br />
                            Andhra Pradesh, India
                        </p>

                        <div className="mt-6 space-y-3 text-gray-700">

                            <p><strong>Phone:</strong> +91 89853 82247</p>
                            <p><strong>Email:</strong> ist@nbkrist.org</p>

                        </div>

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=NBKR+Institute+of+Science+and+Technology"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Get Directions
                        </a>

                    </div>

                </div>

            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16">

                <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                    Key Contacts
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Director Card */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

                        <div className="bg-blue-900 text-white px-6 py-4">
                            <h3 className="font-semibold text-lg">Director</h3>
                        </div>

                        <div className="p-6 space-y-3 text-gray-700">

                            <p className="font-semibold text-gray-900">
                                Dr. V. Vijaya Kumar Reddy
                            </p>

                            <p>
                                <span className="font-medium">Phone:</span><br />
                                89853 82247, 89851 59547
                            </p>

                            <p>
                                <span className="font-medium">Email:</span><br />
                                director@nbkrist.org
                            </p>

                        </div>
                    </div>


                    {/* Admissions Incharge */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

                        <div className="bg-blue-900 text-white px-6 py-4">
                            <h3 className="font-semibold text-lg">Admissions Incharge</h3>
                        </div>

                        <div className="p-6 space-y-3 text-gray-700">

                            <p className="font-semibold text-gray-900">
                                Dr. C. Raveendra Reddy
                            </p>

                            <p>
                                <span className="font-medium">Phone:</span><br />
                                9441572755
                            </p>

                            <p>
                                <span className="font-medium">Email:</span><br />
                                crreddy1966@gmail.com
                            </p>

                        </div>
                    </div>


                    {/* Verification Office */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

                        <div className="bg-blue-900 text-white px-6 py-4">
                            <h3 className="font-semibold text-lg">Student Academic Verification</h3>
                        </div>

                        <div className="p-6 space-y-3 text-gray-700">

                            <p className="font-semibold text-gray-900">
                                Verification Office
                            </p>

                            <p>
                                <span className="font-medium">Phone:</span><br />
                                89853 82247
                            </p>

                            <p>
                                <span className="font-medium">Email:</span><br />
                                verify@nbkrist.org
                            </p>

                            <p className="text-sm text-red-600">
                                Please contact after 10 days of submitting your request.
                            </p>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact