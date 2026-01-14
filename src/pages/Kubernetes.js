import React from 'react';
import './Kubernetes.css';

const Kubernetes = () => {
  return (
    <div className="k8s-page">
      <div className="k8s-content-left">
         <h1 className="k8s-title">Kubernetes</h1>
         
         <div className="k8s-description">
           <p>
            Kubernetes is a container orchestration system for automating, managing and scaling software deployment. Managed Kubernetes allows you to easily create Kubernetes clusters without having to care about low level details.
           </p>
           <p>
            The AWS Private Cloud Managed Kubernetes is certified by the Cloud Native Computing Foundation's (CNCF) <a href="#">Certified Kubernetes Conformance Program</a>. A CNCF-compliant Kubernetes product ensures consistent functionality and allows you to move workloads between compliant platforms with ease.
           </p>
           <p className="k8s-promo">
             <span className="purple-text">AWS Essentials complimentary Kubernetes control plane!</span><br/>
             Try out our free Essential Kubernetes – we want you to deploy and manage your containerized applications with the agility and efficiency you deserve.
           </p>
         </div>

         <div className="k8s-actions">
           <button className="btn-create-k8s">Create new cluster</button>
           <button className="btn-learn-k8s">Learn more</button>
         </div>
      </div>
      
      <div className="k8s-visual">
         {/* Simple CSS representation of the Kubernetes wheel */}
         <div className="k8s-wheel">
             <div className="wheel-rim"></div>
             <div className="wheel-spoke s1"></div>
             <div className="wheel-spoke s2"></div>
             <div className="wheel-spoke s3"></div>
             <div className="wheel-spoke s4"></div>
             <div className="wheel-spoke s5"></div>
             <div className="wheel-spoke s6"></div>
             <div className="wheel-spoke s7"></div>
             <div className="wheel-center"></div>
         </div>
      </div>
    </div>
  );
};

export default Kubernetes;
