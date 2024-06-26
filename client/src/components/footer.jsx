import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link to="/" className='self-center whitespace-nowrap text-md sm:text-xl font-bold dark:text-white'>
        <img src="https://trtblogbucket.s3.us-west-2.amazonaws.com/logo2.png" alt="" srcSet="" width='200' />
      </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Links' />
              <Footer.LinkGroup col>
              <Footer.Link
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Store (Coming Soon)
                </Footer.Link>
                <Footer.Link
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Help (Coming Soon)
                </Footer.Link>
                <Footer.Link
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  FAQ (Coming Soon)
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About Us
                </Footer.Link>
                <Footer.Link
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Resources (Coming Soon)
                </Footer.Link>
                <Footer.Link
                  href='/landacknowledgement'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Land Acknowledgement
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Contact us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='mailto: totallyrandomthoughts2024@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  E-mail
                </Footer.Link>
                <Footer.Link href='#'
                  target='_blank'
                  rel='noopener noreferrer'>
                    Messenger (Coming Soon)</Footer.Link>
                    <Footer.Link href='#'
                  target='_blank'
                  rel='noopener noreferrer'>
                    X (Common Soon)</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='/privacypolicy'>Privacy Policy</Footer.Link>
                <Footer.Link href='/termsandconditions'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Ken Staples"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsYoutube}/>
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitterX}/>
            <Footer.Icon href='#' icon={BsTiktok}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}