import React from 'react'
import WebsiteCreate from '../buildWebsite/WebsiteCreate'
// import { useState } from'react'


export default function Home(props) {


    // const images [img, setImg] = useState([
    //     { src=""}
    // ])

    
  return (
    <>
    
    <h1 className='title-in-home'>Our Templates, For Best Experience</h1> <hr></hr>
    <h3 className='title-in-home'>Totaly <strong>FREE</strong> templates, you can Choose the most suitable template for your need and modify it to get the best Experience </h3> 
    <br/><br/><br/><br/>
    
    <div className="card-container">
        <div class="card">
            <a href={<WebsiteCreate />}><img className="card-img-top" src="img/site1.JPG" alt="Cardcap"/></a>
            <div className="card-body">
                <h5 className="card-title">Business Consulting Company</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site2.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Tech Company</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 43 mins ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site3.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Tech Company</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 55 mins ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site4.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Coaching Professional</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 2 hours ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site5.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Creative Director</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 1 month ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site6.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Business Consulting Company</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 3 weeks ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site7.JPG" alt="Cardcap" />
            <div className="card-body">
                <h5 className="card-title">Coming Soon Landing Page</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 3 days ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site8.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Coming Soon Landing Page</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 4 days ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site9.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Home Goods Store</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site10.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Coming Soon Landing Page</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 2 hours ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site11.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Coming Soon Landing Page</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 20 mins ago</small></p>
            </div>
        </div>

        <div class="card">
            <img className="card-img-top" src="img/site12.JPG" alt="Cardcap"/>
            <div className="card-body">
                <h5 className="card-title">Beauty Salon</h5>
                <p className="card-text"> additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>


    </div>
    </>
    )
}
