<div>AutoRed Schema</div>
<div><br></div>
<div>user </div>
<div><br></div>
<div>Chrome User Schema. </div>
<div><br></div>
<div><br></div>
<div>Reddit API</div>
<div><br></div>
<div><br></div>
<div>ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ</div>
<div><br></div>
<div><br></div>
<div>Account - User</div>
<ul class="Apple-dash-list">
<li>id: binary_id</li>
<li>username_slug: string</li>
<li>first_name: string</li>
<li>last_name: string</li>
<li>is_admin: boolean</li>
<li>usernames  <ÑÑÑÑÑÑÑ> Usernames (has_many) - usernames</li>
<li>pre_defined_messages <ÑÑÑÑÑÑÑ> PreDefinedMessages (has_many) - pre_defined_messages</li>
</ul>
<div> </div>
<div><br></div>
<div>Data - Username</div>
<ul class="Apple-dash-list">
<li>id: binary_id</li>
<li>slug: string</li>
<li>username_slug: string</li>
<li>messages  <ÑÑÑÑÑÑÑ> Messages (has_many) - messages</li>
<li>first_contacted: date</li>
<li>last_contacted: date</li>
</ul>
<div><br></div>
<div><br></div>
<div>Data - Message</div>
<ul class="Apple-dash-list">
<li>id: binary_id</li>
<li>to_username: username_id</li>
<li>from_username: username_id</li>
<li>message: string</li>
<li>approximate_date_sent: string</li>
</ul>
<div><br></div>
<div><br></div>
<div>Data - PreDefinedMessages</div>
<ul class="Apple-dash-list">
<li>id: binary_id</li>
<li>title: string</li>
<li>text: string</li>
</ul>
<div><br></div>
<div><br></div>
<div>ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ</div>
<div><br></div>
<div><br></div>
<div><br></div>
<div><br></div>
<div><br></div>
