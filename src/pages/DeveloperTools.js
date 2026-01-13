import React from 'react';
import './DeveloperTools.css';

const DeveloperTools = () => {
  return (
    <div className="dev-tools-page">
      <div className="dt-header">
         <h1>Developer tools</h1>
         <p>
            Here's our collection of officially supported developer tools and app development stacks. Can't find what you're looking for? Click the feedback icon at the top and tell us what you'd like to see.
         </p>
      </div>

      <div className="dt-grid">
         {/* Export Card */}
         <div className="dt-card">
            <div className="dt-card-content">
               <span className="dt-tag">INFRASTRUCTURE AS CODE</span>
               <h2>Export .tf configuration</h2>
               <p>
                  Generate OpenTofu or Terraform configuration files for your UpCloud resources to manage them as code.
               </p>
               <button className="btn-dt-action primary">Export</button>
            </div>
            <div className="dt-card-visual">
               {/* Use the screenshot logic for code snippet visual */}
               <div className="code-snippet-viz"></div> 
            </div>
         </div>

         {/* OpenTofu Card */}
         <div className="dt-card">
            <div className="dt-card-content">
               <span className="dt-tag">INFRASTRUCTURE AS CODE</span>
               <h2>OpenTofu & Terraform providers</h2>
               <p>
                  Manage your infrastructure as code using the UpCloud OpenTofu & UpCloud Terraform providers.
               </p>
               <div className="dt-btn-group">
                  <button className="btn-dt-action outline">OpenTofu registry</button>
                  <button className="btn-dt-action outline">Terraform registry</button>
               </div>
            </div>
            <div className="dt-card-visual code-bg">
               <pre>
                  <code>
                    <span className="c-kwd">resource</span> "upcloud_server" "server1" {'{'}<br/>
                    &nbsp;&nbsp;hostname = "terraform.example.com"<br/>
                    &nbsp;&nbsp;zone = "nl-ams1"<br/>
                    &nbsp;&nbsp;plan = "1xCPU-1GB"<br/><br/>
                    &nbsp;&nbsp;template {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;size = 25<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;storage = "01000..."<br/>
                    &nbsp;&nbsp;{'}'}<br/>
                    {'}'}
                  </code>
               </pre>
            </div>
         </div>

         {/* CLI Card */}
         <div className="dt-card">
            <div className="dt-card-content">
               <span className="dt-tag">UPCLOUD CLI</span>
               <h2>Command line interface</h2>
               <p>
                  <code>upctl</code> provides a command-line interface to UpCloud services.
               </p>
               <button className="btn-dt-action outline">Learn more</button>
            </div>
            <div className="dt-card-visual terminal-bg">
               <div className="terminal-header">
                  <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
               </div>
               <div className="terminal-body">
                  <code>
                     $ upctl server list --show-ip-addresses<br/>
                     <span className="caret">|</span>
                  </code>
               </div>
            </div>
         </div>

         {/* Pulumi Card */}
         <div className="dt-card">
            <div className="dt-card-content">
               <span className="dt-tag">INFRASTRUCTURE AS CODE</span>
               <h2>Pulumi provider</h2>
               <p>
                  Manage your infrastructure as TypeScript, Python, Go, or C# code.
               </p>
               <button className="btn-dt-action outline">Pulumi registry</button>
            </div>
            {/* Visual is optional or blank based on screenshot, but card needs structure */}
         </div>

      </div>
    </div>
  );
};

export default DeveloperTools;
