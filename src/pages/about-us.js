import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles/theme'
import media from '../styles/media'

import Banner from '../components/Banner'
import Navigation from '../components/Navigation'
import General from '../components/General'
import Testimonials from '../components/Testimonials/Testimonials'

export default ({ navOpen, closeNav }) => (
  <div>
    <Navigation navOpen={navOpen} closeNav={closeNav} />
    <Banner
      image="/images/banner6.jpg"
      alt="Banner Image, Little girl + pattern"
    />
    <Grid>
      <div>
        <Profile>
          <img src="/images/bek_lah.png" alt="Bek Lah" />
          <h4>
            We’d love to hear from you if you’re thinking about doing something
            special for your child, or you’d like to hear more about our
            services.
            <span>Call us today!</span>
          </h4>
          <img
            src="/images/Bek_Lah_sig.png"
            className="sig"
            alt="Bek Lah Signature"
          />
          <p>
            <strong>Events Director</strong>
          </p>
          <p>
            Phone: 0433 911 584<br />
            Email: pebblesparties@gmail.com
          </p>
        </Profile>
      </div>
      <div>
        <General>
          <h3>A little bit about me...</h3>
          <p>
            I’m Bek! And as a mum of two awesome kids, I know personally that taking the stress out of party planning has allowed me to fully enjoy those important moments. Whatever your reason for celebrating, you want to be present, not just wrangling the presents.
          </p>
          <p>
            For me, it’s all about interacting with people, making kids feel
            like they’re the most clever, funny and special people on earth and
            creating moments of joy they’ll never forget. As a mum of two
            awesome kids, I know personally that taking the stress out of party
            organising is what enables parents to fully enjoy the important
            moments.
          </p>
          <p>
            I’ve been working with kids my whole life. I’m an experienced children’s entertainer and party planner. I’ve also worked as a children’s dance instructor, camp counsellor, disability support worker, and owned and operated a café and catering business. Now, I’m lucky enough to host your Pebbles Party!
          </p>
          <p>
            For me, it’s all about making kids feel like they’re the most clever, funny and special little people on earth. Creating moments of joy they’ll never forget.
          </p>
          <p>
            Pebbles Parties is a real passion of mine. I love my team, too! Their the most excellent party hosts who never let me down. It’s so exciting to see how Pebbles Parties adapts as we cater for each unique child we meet – that’s what keeps it fresh for me. So if you have a special request, send it in, I adore creative ideas and would love to tailor a party that perfectly suits your child.
          </p>

          <h5>We organise:</h5>
          <ul>
            <li>Full Party Packages </li>
            <li>Children’s entertainment for weddings</li>
            <li>Children’s entertainment for school events</li>
            <li>Children’s entertainment for corporate events</li>
            <li>Balloon Installations</li>
            <li>Streamer Walls </li>
          </ul>
          <h5>We work with:</h5>
          <ul>
	          <li>Parents </li>
            <li>Wedding planners</li>
            <li>Event organisers</li>
            <li>School communities</li>
            <li>Corporate event managers</li>
          </ul>
        </General>
      </div>
    </Grid>
    <Testimonials />
  </div>
)

const Grid = styled.div`
  display: grid;
  max-width: 118em;
  margin: 0 auto;
  padding: 6em 0;
  grid-template-columns: repeat(auto-fit, minmax(50em, 1fr));
  grid-row-gap: 3em;
  grid-column-gap: 5em;
  width: 94%;
  position: relative;
`

const Profile = styled.div`
  text-align: center;
  img {
    display: inline-block;
    width: 60%;
  }

  h4 {
    color: #f5a586;
    font-family: 'BrandonGrotesqueWeb-Bold';
    font-size: 3.3em;
    margin: 1em 0 0.3em;
    padding: 0 1.4em;
    span {
      display: block;
      margin-top: 0.3em;
    }
  }

  img.sig {
    width: 16em;
  }

  p {
    font-size: 1.5em;
    margin-top: 0;
    line-height: 1.5em;
  }

  strong {
    font-weight: bold;
  }
`
