const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Biomedical Instrumentation Solutions, our mission is to
              revolutionize healthcare by developing innovative biomedical
              instruments and providing top-notch maintenance services. We aim
              to enhance patient care and improve healthcare outcomes through
              cutting-edge technology and expert consulting.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit ligula ac libero aliquet, eget fermentum arcu molestie.
              In hac habitasse platea dictumst. Duis vehicula ante nec orci
              fringilla, ut vulputate lectus molestie.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
            <p className="mb-4">
              Our vision is to be a global leader in biomedical technology,
              known for our innovative solutions and exceptional service. We
              strive to create a healthier world by pushing the boundaries of
              medical science and technology, making advanced healthcare
              accessible to all.
            </p>
            <p>
              Phasellus ut est nisl. Suspendisse vitae risus risus. Nam nec erat
              ut justo mattis semper. Nullam tincidunt sapien quis magna
              lacinia, et viverra velit aliquet. Cras bibendum eros at turpis
              consectetur, nec laoreet dolor eleifend.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            Meet the talented individuals who drive our mission forward and make
            Biomedical Instrumentation Solutions a trusted name in healthcare
            technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-full h-auto rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-600">Chief Executive Officer</p>
            </div>
            {/* Add more team member cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
