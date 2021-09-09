import React from 'react'
import { Breadcrumb } from "@gull";
import MyComponents from "MyComponents";

function Aqare () {
    return (
        <div>

                        <Breadcrumb
          routeSegments={[
            { name: "الرئيسية", path: "/" },
            { name: "قائمة العقارات" }
          ]}
        ></Breadcrumb>
       
        <section className="contact-list">
        <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card text-left">
                <br />
                <MyComponents />

                  <div className="row px-4 mt-3"></div>
                </div>
                </div>
                </div>
    <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card text-left">
                <div className="row px-4 mt-3"></div>
        <div className="table-responsive">
                        <table id="myTable" className="display table w-100">
                          <thead>
                            <tr  class="header">
                              <th width="300">UUID</th>
                              <th>رقم العقار</th>
                              <th>  هل العقار مكتمل</th>
                              <th>هل العقار مفحوص  </th>
                              <th> هل العقار موثق  </th>
                              <th>اجمالي المساحة  </th>
                              <th>اجمالي السعر</th>
                              <th>اسم المكتب</th>
                              <th>مكان العقار</th>
                              <th>المدينة  </th>
                              <th>الحي   </th>

                             </tr>
                          </thead>
                          <tbody>
                            
                                <tr >
                                  <td valign="middle">
                                    <div className="ul-widget-app__profile-pic">
                                     qwertyuio[poiuytr]
                                    </div>
                                  </td>
                                  
                                   
                                  <td>bfgvtg</td>
                                  <td valign="middle">
                                   
                                      gfbhgth
                                    
                                  </td>
                                  <td dir="ltr">  2345678999</td>
                                  <td>لا</td>
                                  <td>لا</td>
                                  <td>نعم</td>
                                  <td>23</td>
                                  <td>غزة</td>
                                  <td>غزة</td>
                                  <td>غزة</td>

                                  <td>
                                    
                                  </td>
                                                                

                                </tr>
                             
                          </tbody>
                        </table>
                      </div>
                      </div>  
                        </div>
                            </div>  
                           
        </section>
        </div>
    )
}

export default Aqare 
