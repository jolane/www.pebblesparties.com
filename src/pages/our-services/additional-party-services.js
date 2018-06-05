import React from 'react'

import OurServicesTemplate from '../../components/OurServicesTemplate'

const data = {
  title: `Additional Party Services`,
  image: `/images/services-additional.png`,
  subTitle: `The list below outlines the party services that we can add-on to any of
  the Complete Entertainment Packages. We can also provide any of the
  below party services on a stand-alone basis.`,
}

export default () => {
  return (
    <OurServicesTemplate {...data} banner="/images/banner10.jpg">
      <h5>Face painting:</h5>
      <table>
        <tr>
          <td>1 hour</td>
          <td>(recommended max 20 kids)</td>
          <td>$140</td>
        </tr>
        <tr>
          <td>1.5 hours</td>
          <td>(recommended max 25 kids)</td>
          <td>$180</td>
        </tr>
        <tr>
          <td>2 hours</td>
          <td>(+30 kids)</td>
          <td>$220</td>
        </tr>
      </table>
      <h5>Balloon twisting:</h5>
      <table>
        <tr>
          <td>1 hour</td>
          <td>(recommended max 20 kids)</td>
          <td>$140</td>
        </tr>
        <tr>
          <td>1.5 hours</td>
          <td>(recommended max 25 kids)</td>
          <td>$180</td>
        </tr>
        <tr>
          <td>2 hours</td>
          <td>(+30 kids)</td>
          <td>$220</td>
        </tr>
      </table>
      <h5>Take-home goodies for the kids:</h5>
      <table>
        <tr>
          <td>Custom gift bags with name labels and extra goodies</td>
          <td>$10 per head</td>
        </tr>
        <tr>
          <td>Helium balloon for each child</td>
          <td>$2 per head</td>
        </tr>
      </table>
      <h5>Costumes and character appearance:</h5>
      <table>
        <tr>
          <td>Themed dressing up props (masks, capes, fairy wings etc.)</td>
          <td>$xx</td>
        </tr>
        <tr>
          <td>Themed costume character appearance</td>
          <td>$xx</td>
        </tr>
      </table>
    </OurServicesTemplate>
  )
}
