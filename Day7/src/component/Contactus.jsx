import React from 'react'
import "./contactus.css"
export default function Contactus() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Contact us</h1>
      <div class="section_10">
        <div class="responsive-container-block container">
          <form id="iox4">
            <div class="responsive-container-block form-container">
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 first-name" id="i10mt-5">
                <p class="text-blk input-title">
                  Full Name
                </p>
                <input class="input" id="ijowk-5" name="FirstName" placeholder="First Name" />
              </div>
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p class="text-blk input-title">
                  Email Address
                </p>
                <input class="input" id="ipmgh-5" name="Email" placeholder="Email" />
              </div>
              <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-5">
                <p class="text-blk input-title">
                  Message
                </p>
                <textarea class="textinput" id="i5vyy-5" placeholder="Write a message..."></textarea>
              </div>
              <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                <button class="submit-btn" id="w-c-s-bgc_p-1-dm-id-3">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>

  )
}