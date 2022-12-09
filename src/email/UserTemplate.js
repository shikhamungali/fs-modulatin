module.exports=()=>{
return `<head>
  <title>A Responsive Email Template</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style type="text/css">
    /* CLIENT-SPECIFIC STYLES */
    #outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
    .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */
    body, table, td, a{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
    table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
    img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */
    /* RESET STYLES */
    body{margin:0; padding:0;}
    img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
    table{border-collapse:collapse !important;}
    body{height:100% !important; margin:0; padding:0; width:100% !important;}
    /* iOS BLUE LINKS */
    .appleBody a {color:#68440a; text-decoration: none;}
    .appleFooter a {color:#999999; text-decoration: none;}
    /* MOBILE STYLES */
    @media screen and (max-width: 666px) {
    /* ALLOWS FOR FLUID TABLES */
    /*table[class="wrapper"]*/
    /* ADJUSTS LAYOUT OF LOGO IMAGE */
    td[class="logo"]{
    text-align: left;
    padding: 20px 0 20px 0 !important;
    }
    td[class="logo"] img{
    margin:0 auto!important;
    }
    /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */
    td[class="mobile-hide"]{
    display:none;}
    img[class="mobile-hide"]{
    display: none !important;
    }
    /*img[class="img-max"]*/
    /* FULL-WIDTH TABLES */
    /*table[class="responsive-table"]*/
    /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */
    td[class="padding"]{
    padding: 10px 5% 15px 5% !important;
    }
    /*td[class="padding-copy"]*/
    td[class="padding-meta"]{
    padding: 30px 5% 0px 5% !important;
    text-align: center;
    }
    td[class="no-pad"]{
    padding: 0 0 20px 0 !important;
    }
    td[class="no-padding"]{
    padding: 0 !important;
    }
    /*td[class="section-padding"]*/
    td[class="section-padding-bottom-image"]{
    padding: 50px 15px 0 15px !important;
    }
    /* ADJUST BUTTONS ON MOBILE */
    /*td[class="mobile-wrapper"]*/
    table[class="mobile-button-container"]{
    margin:0 auto;
    width:100% !important;
    }
    a[class="mobile-button"]{
    width:80% !important;
    padding: 15px !important;
    border: 0 !important;
    font-size: 16px !important;
    }
    }
  </style>
</head>

<body style="margin: 0; padding: 0;">
  <!-- HEADER -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody>
      <tr>
        <td bgcolor="#FFFFFF">
          <!-- HIDDEN PREHEADER TEXT -->
          <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
            <p>Everyday chores just got a lot easier.</p>
            ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp;
            ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp;
            ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp;
            ‌&nbsp; ‌&nbsp; ‌&nbsp; ‌&nbsp;
          </div>
          <div align="center" style="padding: 0px 15px 0px 15px;">
            <table border="0" cellpadding="0" cellspacing="0" width="666" class="wrapper">
              <!-- LOGO/PREHEADER TEXT -->
              <tbody>
                <tr>
                  <td style="padding: 30px 0px 20px 0px;" class="logo">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tbody>
                        <tr bgcolor="#FFFFFF">
                          <td>
                            <center>
                              <a href="https://www.taskrabbit.com?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" target="_blank"><img src="http://media.sailthru.com/53p/1k0/6/d/575f4958dbe38.png" width="200" height="30"></a>
                            </center>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </tbody>
  </table>


  <!-- ONE COLUMN W/IMG SECTION -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody>
      <tr>
        <td bgcolor="#ffffff" align="center" style="padding: 0px 15px 18px 15px;">
          <table border="0" cellpadding="0" cellspacing="0" width="666" class="responsive-table">
            <tbody>
              <tr>
                <td>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="background-image: url(http://media.sailthru.com/53p/1k0/2/p/56cf3fd48c073.png); background-position: top center; height: 31px; background-repeat: no-repeat;">
                          <a href="https://www.taskrabbit.com/m/cleaning?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" "https:=" " www.taskrabbit.co.uk=" " m=" " cleaning"="" target="_blank" style="float: left; display: block; padding-left:0; width:110px; height:20px;"></a>
                          <a href="https://www.taskrabbit.com/m/shopping-delivery?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" "https:=" " www.taskrabbit.co.uk=" " m=" " shopping-delivery"="" target="_blank" style="float: left; display: block; padding-left:34px; width:70px; height:20px;"></a>
                          <a href="https://www.taskrabbit.com/m/handyman?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" "https:=" " www.taskrabbit.co.uk=" " m=" " handyman"="" target="_blank" style="float: left; display: block; padding-left:34px; width:115px; height:20px;"></a>
                          <a href="https://www.taskrabbit.com/m/moving-help?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" "https:=" " www.taskrabbit.co.uk=" " m=" " moving-help"="" target="_blank" style="float: left; display: block; padding-left:34px; width:150px; height:20px;"></a>
                          <a href="https://www.taskrabbit.com/m/gen-help?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" "https:=" " www.taskrabbit.co.uk=" " m=" " gen-help"="" target="_blank" style="float: left; display: block; padding-left:34px; width:80px; height:20px;"></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td align="center" style="padding: 18px 0 0 0; border-top: 1px #CFD2D3 solid;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- HERO IMAGE -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <a href="https://itunes.apple.com/us/app/id374165361?mt=8" target="_blank">
                            <img src="http://media.sailthru.com/53p/1k0/7/p/57967e61e0738.jpg" width="666" border="0" alt="TaskRabbit Panel 1" style="display: block; color: #666666;  font-family: Helvetica, arial, sans-serif; font-size: 16px;" class="img-max">
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.taskrabbit.com/m/cleaning?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" target="_blank">
                            <img src="http://media.sailthru.com/53p/1k0/7/c/578579609a9ab.jpg" width="666" border="0" alt="TaskRabbit Panel 2" style="display: block; color: #666666;  font-family: Helvetica, arial, sans-serif; font-size: 16px;" class="img-max">
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.taskrabbit.com/m/handyman?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" target="_blank">
                            <img src="http://media.sailthru.com/53p/1k0/7/c/57857969bdec6.jpg" width="666" border="0" alt="TaskRabbit Panel 3" style="display: block; color: #666666;  font-family: Helvetica, arial, sans-serif; font-size: 16px;" class="img-max">
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.taskrabbit.com/m/shopping-delivery?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" target="_blank">
                            <img src="http://media.sailthru.com/53p/1k0/7/c/578579747145e.jpg" width="666" border="0" alt="TaskRabbit Panel 4" style="display: block; color: #666666;  font-family: Helvetica, arial, sans-serif; font-size: 16px;" class="img-max">
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://www.taskrabbit.com?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" target="_blank">
                            <img src="http://media.sailthru.com/53p/1k0/7/c/5785797ea4b26.jpg" width="666" border="0" alt="TaskRabbit Panel 5" style="display: block; color: #666666;  font-family: Helvetica, arial, sans-serif; font-size: 16px;" class="img-max">
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <!-- BEGIN HR -->
      <tr>
        <td align="center" style="padding: 0 0px 0 0px;">
          <!--<td align="center" style="padding: 0 15px 0 15px;">-->
          <table border="0" cellpadding="0" cellspacing="0" width="666" class="responsive-table">
            <tbody>
              <tr>
                <td>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td align="center" style="padding: 0 0 0 0; border-bottom: 1px #CFD2D3 solid;"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <!-- END HR -->
      </tr>
    </tbody>
  </table>


  <!-- APP DOWNLOAD -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody>
      <tr>
        <td align="center">
          <table border="0" cellpadding="0" cellspacing="0" width="666" class="responsive-table">
            <tbody>
              <tr>
                <td>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <table width="140" height="27" border="0" cellspacing="0" cellpadding="0" align="center" class="responsive-table">
                    <tbody>
                      <tr>
                        <td align="center" style="padding-top: 36px; padding-bottom:36px;">
                          <table width="140" height="27" border="0" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                              <tr align="center">
                                <td width="33">
                                  <a href="https://twitter.com/taskrabbit/?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" border="0" target="_blank"><img src="http://media.sailthru.com/53p/1jz/a/e/561ebb2dcaf58.png" width="33" height="27" style="display: block;"></a>
                                </td>
                                <td width="26">
                                  <a href="https://www.instagram.com/taskrabbit/?utm_campaign=NEW+Welcome+Email+1&amp;utm_medium=email&amp;utm_source=Sailthru" border="0" target="_blank"><img src="http://media.sailthru.com/53p/1jz/a/e/561ebb81140eb.png" width="26" height="27" style="display: block;"></a>
                                </td>
                                <td width="26">
                                  <a href="https://www.facebook.com/TaskRabbit/?utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" border="0" target="_blank"><img src="http://media.sailthru.com/53p/1jz/a/e/561ebb4f90bfa.png" width="26" height="27" style="display: block;"></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td>
                </td>
              </tr>
              <tr align="center">
                <td>
                  <table width="140" height="27" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                      <tr>
                        <td width="130" style="padding-right:10px;">
                          <a href="https://itunes.apple.com/us/app/id374165361?mt=8" target="_blank"><img src="http://media.sailthru.com/53p/1jz/a/e/561ebac54feca.png" width="130" height="40" style="display: block; color: #666666; font-family: Helvetica, arial, sans-serif; font-size: 13px; width: 130px; height: 40px;" alt="TaskRabbit in the AppStore"
                              border="0"></a>
                        </td>
                        <td width="130" style="padding-left:10px;">
                          <a href="https://play.google.com/store/apps/details?id=com.taskrabbit.droid.consumer&amp;utm_source=Sailthru&amp;utm_medium=email&amp;utm_campaign=NEW%20Welcome%20Email%201" target="_blank"><img src="http://media.sailthru.com/53p/1jz/a/e/561ebafd84f13.png" width="130" height="40" style="display: block; color: #666666; font-family: Helvetica, arial, sans-serif; font-size: 13px; width: 130px; height: 40px;" alt="TaskRabbit in the Google Play Store"
                              border="0"></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>


            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- FOOTER -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody>
      <tr>
        <td bgcolor="#ffffff" align="center" style="padding: 36px 0;">
          <!-- UNSUBSCRIBE COPY -->
          <table width="666" border="0" cellspacing="0" cellpadding="0" align="center" class="responsive-table">
            <tbody>
              <tr>
                <td align="center" style="font-size: 12px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#666666;">
                  <span class="appleFooter" style="color:#666666;">TaskRabbit - San Francisco, CA</span><br><a href="#" class="original-only" style="color: #666666; text-decoration: none;"
                    target="_blank">Unsubscribe</a>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;<a href="https://support.taskrabbit.com/hc/en-us" class="original-only" style="color: #666666; text-decoration: none;" target="_blank">Support</a><span class="original-only"
                    style="font-family: Arial, sans-serif; font-size: 12px; color: #444444;">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span><a href="https://www.taskrabbit.com/privacy" style="color: #666666; text-decoration: none;" target="_blank">Privacy Policy</a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

</body>`
}