import React, { useEffect } from "react";
import { wordpressUrl } from "../lib/wordpress";
export default function Login() {
  useEffect(() => { window.location.replace(`${wordpressUrl}/wp-login.php?redirect_to=${encodeURIComponent(`${wordpressUrl}/wp-admin/edit.php`)}`); }, []);
  return <div className="section container-pad"><p>Opening the secure WordPress news dashboard…</p><a className="text-kogi-green underline" href={`${wordpressUrl}/wp-login.php`}>Continue to WordPress login</a></div>;
}
