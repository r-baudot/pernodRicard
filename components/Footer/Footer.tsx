import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Brands', href: '/brands' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Publications',
      links: [
        { label: 'Annual Report', href: '/publications/annual-report' },
        { label: 'Press Releases', href: '/media/press' },
        { label: 'Sustainability Report', href: '/publications/sustainability' },
      ],
    },
    {
      title: 'Direct Access',
      links: [
        { label: 'Investors', href: '/investors' },
        { label: 'Media', href: '/media' },
        { label: 'Commitments', href: '/commitments' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'X', href: '#', icon: 'x' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="w-full px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Pernod Ricard</h3>
            <p className="text-gray-300 text-sm">
              Créateurs de Convivialité
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Worldwide leader in the spirits and wine industry.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Legal */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right mt-4 text-sm text-gray-400">
            © {currentYear} Pernod Ricard. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
