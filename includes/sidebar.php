<div class="col starts-at-full ends-at-one-third clr holding-box">
    <h2>
            <span>
                <span>
                    Add a tag
                </span>
            </span>
    </h2>
    <div class="breather">
        <div id="user-contributions">


            <div>Users have not yet tagged this record</div>
            <div>
                <ul id="tag-list">
                    <span class="errormessage">                </span>
                </ul>
            </div>





            <div class="add-tag ">
                <ul id="add-tag-list" style="display:none;">
                    <li>
                        <p>Enter the tag you would like to associate with this record and click 'Add tag'. Please ensure the tag is appropriate for the record. <a href="/tags/index/howtotag">Read tagging guidelines</a>.</p>
                        <div class="tag-added-confirm" style="display:none;"><p>Your tag has been added. Thank you.</p><span><a title="Hide this message" href="#">&nbsp;</a></span></div>

                        <div class="tagForm">
                            <form action="/Details/AddTag?iaid=C608662" method="post">                        <label for="tagEntryText" class="entryLabel">Enter tag:</label>
                                <span class="textBoxSpan"><input id="tagEntryText" name="tagEntryText" type="text" value=""></span>
                                <input type="submit" value="Add tag" class="discoverySecondaryCallToActionLink" onclick="dcsMultiTrack('DCS.dcsuri','/AssetDetails/AddaTag','WT.ti','Add a Tag','WT.cg_n','Add a Tag','WT.dl','0','DCSext.prodpgtype','','DCSext.prodpgaction','');" id="tag-submit" disabled="disabled">
                                <span><a href="/tags/index">Show all tags</a> | <a href="/account/tags">Your tags</a></span>
                            </form>                </div>
                    </li>
                </ul>

                <ul id="sign-in-or-register" style="">
                    <li>
                        <p>
                            You need to
                            <a href="/sign-in">sign in</a>
                            to tag records.
                            If you don't have an account please
                            <a href="/register?returnUrl=%2Fdetails%2Fr%2FC608662">register</a>.
                        </p>
                    </li>
                </ul>

            </div>



        </div>
    </div>
    <div class="separator-illusion">&nbsp;</div>


    <form action="/details/r/C608662/submitcorrection" id="suggest-a-correction-form" method="post">    <h2><span><span>Found an error?</span></span></h2>
        <div class="breather">
            <p>If you find an error with this record description <a href="#" id="show-suggestion-form">let us know</a></p>
        </div>
        <div class="breather suggestion-form-wrapper" style="display: none;">
            <p>Fields marked with <span class="indicate-mandatory-form-element">*</span> are mandatory.</p>
            <div class="first-form-field-group">
                <label for="fieldContainingError">Which field contains the error? <span class="indicate-mandatory-form-element">*</span></label>
                <select data-val="true" data-val-required="This field is required" id="fieldContainingError" name="Field"><option value="">Select from list</option>
                    <option>Access conditions</option>
                    <option>Arrangement</option>
                    <option>Creator</option>
                    <option>Date</option>
                    <option>Description</option>
                    <option>Former references</option>
                    <option>Held by</option>
                    <option>Language</option>
                    <option>Legal status</option>
                    <option>Note</option>
                    <option>Other</option>
                    <option>Physical description</option>
                    <option>Reference</option>
                    <option>Related Material</option>
                    <option>Separated Material</option>
                    <option>Title</option>
                </select>
                <span class="field-validation-valid" data-valmsg-for="Field" data-valmsg-replace="true"></span>
            </div>
            <div class="form-field-group">
                <label for="whatIsTheError">What is the error? <span class="indicate-mandatory-form-element">*</span></label>
                <textarea cols="20" data-val="true" data-val-length="Maximum decription length is 1000 characters" data-val-length-max="1000" data-val-required="This field is required" id="whatIsTheError" name="Description" rows="2"></textarea>
                <span class="field-validation-valid" data-valmsg-for="Description" data-valmsg-replace="true"></span>
            </div>
            <div class="form-field-group">
                <label for="whatIsTheRecommendation">What is the correct information? <span class="indicate-mandatory-form-element">*</span></label>
                <textarea cols="20" data-val="true" data-val-length="Maximum decription length is 1000 characters" data-val-length-max="1000" data-val-required="This field is required" id="whatIsTheRecommendation" name="Recommendation" rows="2"></textarea>
                <span class="field-validation-valid" data-valmsg-for="Recommendation" data-valmsg-replace="true"></span>
            </div>
            <div class="form-field-group">
                <label for="referenceDetails" id="reference-details-label"> Have you seen this error elsewhere? Please provide reference details</label>
                <textarea cols="20" id="referenceDetails" name="ReferenceDetails" rows="2"></textarea>
            </div>
        </div>
        <div class="breather suggestion-form-wrapper" style="display: none;">
            <h3 class="inline">Your details</h3>
            <div class="form-field-group">
                <p>
                    If you provide your details, we will contact you within 10 working days if we cannot act on your suggestion
                </p>
                <div class="small-spacer-below">
                    <label for="userName" id="username-label">
                        Name
                    </label>
                    <input id="userName" name="UserName" type="text" value="">
                </div>
                <div class="small-spacer-below">
                    <label for="userEmail" id="email-address-label">
                        Email address
                    </label>
                    <input id="userEmail" name="UserEmail" type="text" value="">
                </div>
            </div>
            <div class="last-form-field-group">
                <input class="discoverySecondaryCallToActionLink" type="submit" value="Submit" onclick="dcsMultiTrack('DCS.dcsuri','/AssetDetails/SubmitaCorrection','WT.ti','Submit a Correction','WT.cg_n','Submit Correction','WT.dl','0','DCSext.prodpgtype','','DCSext.prodpgaction','');">
            </div>
        </div>
        <input id="Hash" name="Hash" type="hidden" value=""></form>
</div>