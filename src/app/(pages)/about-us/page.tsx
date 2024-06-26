import Link from "next/link";
export const metadata = {
    title: {
        absolute: "About Page",
    },
    description: "At our blogging platform, we aim to empower writers, developers, and designers to showcase their talents and expertise by providing a platform to create and share high- quality content.",
};
export default function Page() {


    return (
        <div className=" dark:text-zinc-100  px-6 ">
            <header className=" shadow-md">
                <div className="container mx-auto py-4 px-8">
                    <h1 className="text-3xl font-bold dark:text-zinc-100  text-gray-800">About Us</h1>
                </div>
            </header>

            <main className="container  mx-auto py-8 px-4">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 dark:text-zinc-100 leading-relaxed">
                        At our blogging platform, we aim to empower writers, developers, and designers to showcase their talents
                        and
                        expertise by providing a platform to create and share high-quality content.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className=" shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-2">Blog Writing</h3>
                            <p className="text-gray-700 dark:text-zinc-100  leading-relaxed">
                                We offer writers the opportunity to write and publish engaging blog posts on a wide range of
                                topics. Writers receive a percentage of ad revenue generated by their content.
                            </p>
                        </div>
                        <div className=" shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                            <p className="text-gray-700 dark:text-zinc-100  leading-relaxed">
                                Our platform provides resources and support for web developers to showcase their skills and
                                collaborate on projects.
                            </p>
                        </div>
                        <div className=" shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-2">Product Design</h3>
                            <p className="text-gray-700 dark:text-zinc-100  leading-relaxed">
                                Product designers can leverage our platform to share their design concepts and collaborate with
                                other professionals in the industry.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
                    <p className="text-gray-700 dark:text-zinc-100  leading-relaxed">
                        Join our community today to start writing, developing, or designing! Whether you&apos;re an experienced
                        professional or just starting out, there&apos;s a place for you here at our blogging platform.
                    </p>

                </section>
            </main>
        </div>
    );
};
