var myApp = angular.module('myApp', []);
 
myApp.controller("studentController", function ($scope,$rootScope, $http) {




    $rootScope.profile={
        "personalInfo":[{
                                    "firstname" : "akash",
                                    "middlename" : "kumar",
                                    "lastname" : "gupta",
                                    "maidenName" : "gupta",
                                    "fathersname" : "abc",
                                    "gender" : "male",
                                    "DoB" : new Date("10/03/1993"),
                                    "emailAddress":"abc@mail.com",
                                    "personalInfoEdited" : false
        }],
        "addressInfo" :[{
                                    "currentAddress" : "bangalore",
                                    "currentLandmark" : "hsr",
                                    "currStartDate" : new Date("10/03/2011"),
                                    "currLastDate" : new Date("10/03/2017"),
                                    "PermanentAddress" : "up",
                                    "permanentLandmark" : "vanaras",
                                    "permanentStartDate" : "",
                                    "permanentLastDate" : "",
                                    "mobileNum" : "9089786756",
                                    "landlineNum":"253425",
                                     "addressEdited" : false
        }],
        "schoolingDetails":[{
                                    "Details":"10th",
                                     "SchoolName":"ssvm",
                                     "City":"vanaras",
                                     "Board":"up",
                                     "Yop":"2016",
                                    "CGPA":"90",
                                    "schoolingDetailsEdited" : false
        }],
        "highestEduDetails":[{

                                    "ClgName_high_edu":"mit",
                                    "ClgName_2ndHigh_edu":"rit",
                                     "CollegeAddress_high_edu":"nyc",
                                     "CollegeAddress_2ndHigh_edu":"highestEduDetail1",
                                      "UniversityName_high_edu":"",
                                     "UniversityName_2ndHigh_edu":"",
                                     "UniversityAddress_high_edu":"",
                                    "UniversityAddress_2ndHigh_edu":"",
                                      "Subject_high_edu":"",
                                     "Subject_2ndHigh_edu":"",
                                     "DegreeType_high_edu":"",
                                     "DegreeType_2ndHigh_edu":"",
                                     "startdate_high_edu":"",
                                    "enddate_high_edu":"",
                                      "startdate_2ndHigh_edu":"",
                                     "enddate_2ndHigh_edu":"",
                                     "CGPA_high_edu":"",
                                     "CGPA_2ndHigh_edu":"",
                                    "RollNo_high_edu":"",
                                    "RollNo_2ndHigh_edu":"",
                                    "Graduated_high_edu":"",
                                     "Graduated_2ndHigh_edu":"",
                                     "Program_high_edu":"",
                                    "Program_2ndHigh_edu":"",
                                    "highestEduDetailsEdited" : false
                                   
        }],
         "employmentDetails":[
                                {
                                        "companyName":"zwayam",
                                        "positionHeld":"se",
                                         "address":"",
                                         "Telephone":"",
                                         "period":{
                                                "to":new Date("10/03/2011"),
                                                "from":new Date("10/03/2014")
                                            },
                                         "CTC":"",
                                         "Reasonforleaving":"",
                                         "NoticePeriod":"",
                                        "EmployeeCode":"",
                                         "ReportingManager":"",
                                         "Designation_rm":"",
                                         "ContactNo":"",
                                         "EmailID":"",
                                         "empType":"",
                                         "ClientInfo":"",
                                         "reference":"",
                                         "refDate":"",
                                        "employmentDetailsEdited" : false
                                }],

        "workExperenceDetails":[{
                                   "companyName":"zwayam",
                                     "Address":"hsr",
                                     "period":{
                                        "to":new Date("10/03/2015"),
                                        "from":new Date("10/03/2011")
                                    },
                                     "Reasonforleaving":"dybya",
                                     "ReportingManagerDetail":"sdjh",
                                    "workExperenceDetailsEdited" : false
                                }],
        "overallExpDetails":[{
                                    "totalExp":"1",
                                     "releventExp":"2",
                                     "nonITExp":"1",
                                    
                                    "overallExpDetailsEdited" : false
                                }],
        "gapDetails":[{
                                  "period":{
                                        "to":"12/1/2008",
                                        "from":"13/6/2009"
                                    },
                                     "reason":"family problem",
                                     "gapType":"education",
                                    "gapDetailsEdited" : false
                                }],
         "professionalReferencesDetails":[{
                                     "name":"waseem",
                                     "contactnumber":"9089786756",
                                     "currentlyWorking":"coviam",
                                       "designation":"se",
                                     "alternateNumber":"3456789876",
                                    "professionalReferencesDetailsEdited" : false      
                                }],
        "familyMembersAtMindtreeDetails":[{
                                  "relationship":"brother",
                                     "fullName":"akash gupta",
                                     "MID":"rty",
                                    "familyMembersAtMindtreeDetailsEdited" : false  
                                }],

   
                "pendingProfileString":null

    };

                $scope.savePersonalInfo = function(sectionName) {
                                     if(sectionName=="personalInformation"){
                                if ($rootScope.profile.personalInfoBeingEdited.index == undefined) {
                                    $rootScope.profile.personalInfo
                                            .push($rootScope.profile.personalInfoBeingEdited);
                                    //
                                    $rootScope.profile.personalInfo[$rootScope.profile.personalInfo.length - 1].personalInfoEdited = true;
                                } else {
                                    $rootScope.profile.personalInfo[$rootScope.profile.personalInfoBeingEdited.index] = $rootScope.profile.personalInfoBeingEdited;
                                    $rootScope.profile.personalInfo[$rootScope.profile.personalInfoBeingEdited.index].personalInfoEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               // $scope.saveResume();
                            }
                            else
                                if(sectionName=="addressInformation"){
                                      if ($rootScope.profile.addressBeingEdited.index == undefined) {
                                    $rootScope.profile.addressInfo
                                            .push($rootScope.profile.addressBeingEdited);
                                    //
                                    $rootScope.profile.addressInfo[$rootScope.profile.addressInfo.length - 1].addressEdited = true;
                                } else {
                                    $rootScope.profile.addressInfo[$rootScope.profile.addressBeingEdited.index] = $rootScope.profile.addressBeingEdited;
                                    $rootScope.profile.addressInfo[$rootScope.profile.addressBeingEdited.index].addressEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                                //$scope.saveResume();
                            }
                              else
                                if(sectionName=="schoolingDetailsInfo"){
                                      if ($rootScope.profile.schoolingDetailsBeingEdited.index == undefined) {
                                    $rootScope.profile.schoolingDetails
                                            .push($rootScope.profile.schoolingDetailsBeingEdited);
                                    //
                                    $rootScope.profile.schoolingDetails[$rootScope.profile.schoolingDetails.length - 1].schoolingDetailsEdited = true;
                                } else {
                                    $rootScope.profile.schoolingDetails[$rootScope.profile.schoolingDetailsBeingEdited.index] = $rootScope.profile.schoolingDetailsBeingEdited;
                                    $rootScope.profile.schoolingDetails[$rootScope.profile.schoolingDetailsBeingEdited.index].schoolingDetailsEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               // $scope.saveResume();
                            }
                            else
                                if(sectionName=="highestEduDetailsInfo"){
                                      if ($rootScope.profile.highestEduDetailsBeingEdited.index == undefined) {
                                    $rootScope.profile.highestEduDetails
                                            .push($rootScope.profile.highestEduDetailsBeingEdited);
                                    //
                                    $rootScope.profile.highestEduDetails[$rootScope.profile.highestEduDetails.length - 1].highestEduDetailsEdited = true;
                                } else {
                                    $rootScope.profile.highestEduDetails[$rootScope.profile.highestEduDetailsBeingEdited.index] = $rootScope.profile.highestEduDetailsBeingEdited;
                                    $rootScope.profile.highestEduDetails[$rootScope.profile.highestEduDetailsBeingEdited.index].highestEduDetailsEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               //$scope.saveResume();
                            }
                               else
                                if(sectionName=="employmentDetailsInfo"){
                                      if ($rootScope.profile.employmentDetailsBeingEdited.index == undefined) {
                                    $rootScope.profile.employmentDetails
                                            .push($rootScope.profile.employmentDetailsBeingEdited);
                                    //
                                    $rootScope.profile.employmentDetails[$rootScope.profile.employmentDetails.length - 1].employmentDetailsEdited = true;
                                } else {
                                    $rootScope.profile.employmentDetails[$rootScope.profile.employmentDetailsBeingEdited.index] = $rootScope.profile.employmentDetailsBeingEdited;
                                    $rootScope.profile.employmentDetails[$rootScope.profile.employmentDetailsBeingEdited.index].employmentDetailsEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               //$scope.saveResume();
                            }
                            else
                                if(sectionName=="workExperenceInfo"){
                                      if ($rootScope.profile.workExperenceDetailsBeingEdited.index == undefined) {
                                    $rootScope.profile.workExperenceDetails
                                            .push($rootScope.profile.workExperenceDetailsBeingEdited);
                                    //
                                    $rootScope.profile.workExperenceDetails[$rootScope.profile.workExperenceDetails.length - 1].workExperenceDetailsEdited = true;
                                } else {
                                    $rootScope.profile.workExperenceDetails[$rootScope.profile.workExperenceDetailsBeingEdited.index] = $rootScope.profile.workExperenceDetailsBeingEdited;
                                    $rootScope.profile.workExperenceDetails[$rootScope.profile.workExperenceDetailsBeingEdited.index].workExperenceDetailsEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               //$scope.saveResume();
                            }
                             else
                                if(sectionName=="overallExpInfo"){
                                      if ($rootScope.profile.overallExpDetailsBeingEdited.index == undefined) {
                                    $rootScope.profile.overallExpDetails
                                            .push($rootScope.profile.overallExpDetailsBeingEdited);
                                    //
                                    $rootScope.profile.overallExpDetails[$rootScope.profile.overallExpDetails.length - 1].overallExpDetailsEdited = true;
                                } else {
                                    $rootScope.profile.overallExpDetails[$rootScope.profile.overallExpDetailsBeingEdited.index] = $rootScope.profile.overallExpDetailsBeingEdited;
                                    $rootScope.profile.overallExpDetails[$rootScope.profile.overallExpDetailsBeingEdited.index].overallExpDetailsEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               //$scope.saveResume();
                            }
                                 else
                                if(sectionName=="gapInfo"){
                                      if ($rootScope.profile.gapDetailsBeingEdited.index == undefined) {
                                    $rootScope.profile.gapDetails
                                            .push($rootScope.profile.gapDetailsBeingEdited);
                                    //
                                    $rootScope.profile.gapDetails[$rootScope.profile.gapDetails.length - 1].gapDetailsEdited = true;
                                } else {
                                    $rootScope.profile.gapDetails[$rootScope.profile.gapDetailsBeingEdited.index] = $rootScope.profile.gapDetailsBeingEdited;
                                    $rootScope.profile.gapDetails[$rootScope.profile.gapDetailsBeingEdited.index].gapDetailsEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               //$scope.saveResume();
                            }
                                 else
                                if(sectionName=="professionalReferencesInfo"){
                                      if ($rootScope.profile.professionalReferencesDetailsBeingEdited.index == undefined) {
                                    $rootScope.profile.professionalReferencesDetails
                                            .push($rootScope.profile.professionalReferencesDetailsBeingEdited);
                                    //
                                    $rootScope.profile.professionalReferencesDetails[$rootScope.profile.professionalReferencesDetails.length - 1].professionalReferencesDetailsEdited = true;
                                } else {
                                    $rootScope.profile.professionalReferencesDetails[$rootScope.profile.professionalReferencesDetailsBeingEdited.index] = $rootScope.profile.professionalReferencesDetailsBeingEdited;
                                    $rootScope.profile.professionalReferencesDetails[$rootScope.profile.professionalReferencesDetailsBeingEdited.index].professionalReferencesDetailsEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               //$scope.saveResume();
                            }
                                 else
                                if(sectionName=="familyMembersAtMindtreeInfo"){
                                      if ($rootScope.profile.familyMembersAtMindtreeDetailsBeingEdited.index == undefined) {
                                    $rootScope.profile.familyMembersAtMindtreeDetails
                                            .push($rootScope.profile.familyMembersAtMindtreeDetailsBeingEdited);
                                    //
                                    $rootScope.profile.familyMembersAtMindtreeDetails[$rootScope.profile.familyMembersAtMindtreeDetails.length - 1].familyMembersAtMindtreeDetailsEdited = true;
                                } else {
                                    $rootScope.profile.familyMembersAtMindtreeDetails[$rootScope.profile.familyMembersAtMindtreeDetailsBeingEdited.index] = $rootScope.profile.familyMembersAtMindtreeDetailsBeingEdited;
                                    $rootScope.profile.familyMembersAtMindtreeDetails[$rootScope.profile.familyMembersAtMindtreeDetailsBeingEdited.index].familyMembersAtMindtreeDetailsEdited = true;
                                }
                                $rootScope.profile.pendingProfileString = null;
                               //$scope.saveResume();
                            }
                        }


                                $scope.updatePersonalInfo = function(index,sectionName) {
                                    if(sectionName=="personalInformation"){
                                $rootScope.profile.personalInfoBeingEdited = angular
                                        .copy($rootScope.profile.personalInfo[index]);
                                $rootScope.profile.personalInfoBeingEdited.index = index;
                             }
                             else 
                                if(sectionName=="addressInformation"){
                                $rootScope.profile.addressBeingEdited = angular
                                        .copy($rootScope.profile.addressInfo[index]);
                                $rootScope.profile.addressBeingEdited.index = index;
                             }
                               else 
                                if(sectionName=="schoolingDetailsInfo"){
                                $rootScope.profile.schoolingDetailsBeingEdited = angular
                                        .copy($rootScope.profile.schoolingDetails[index]);
                                $rootScope.profile.schoolingDetailsBeingEdited.index = index;
                             }
                             else 
                                if(sectionName=="highestEduDetailsInfo"){
                                $rootScope.profile.highestEduDetailsBeingEdited = angular
                                        .copy($rootScope.profile.highestEduDetails[index]);
                                $rootScope.profile.highestEduDetailsBeingEdited.index = index;
                             }
                                 else 
                                if(sectionName=="employmentDetailsInfo"){
                                $rootScope.profile.employmentDetailsBeingEdited = angular
                                        .copy($rootScope.profile.employmentDetails[index]);
                                $rootScope.profile.employmentDetailsBeingEdited.index = index;
                             }
                             else 
                                if(sectionName=="workExperenceInfo"){
                                $rootScope.profile.workExperenceDetailsBeingEdited = angular
                                        .copy($rootScope.profile.workExperenceDetails[index]);
                                $rootScope.profile.workExperenceDetailsBeingEdited.index = index;
                             }
                              else 
                                if(sectionName=="overallExpInfo"){
                                $rootScope.profile.overallExpDetailsBeingEdited = angular
                                        .copy($rootScope.profile.overallExpDetails[index]);
                                $rootScope.profile.overallExpDetailsBeingEdited.index = index;
                             }
                               else 
                                if(sectionName=="gapInfo"){
                                $rootScope.profile.gapDetailsBeingEdited = angular
                                        .copy($rootScope.profile.gapDetails[index]);
                                $rootScope.profile.gapDetailsBeingEdited.index = index;
                             }
                             else 
                                if(sectionName=="professionalReferencesInfo"){
                                $rootScope.profile.professionalReferencesDetailsBeingEdited = angular
                                        .copy($rootScope.profile.professionalReferencesDetails[index]);
                                $rootScope.profile.professionalReferencesDetailsBeingEdited.index = index;
                             }
                             else 
                                if(sectionName=="familyMembersAtMindtreeInfo"){
                                $rootScope.profile.familyMembersAtMindtreeDetailsBeingEdited = angular
                                        .copy($rootScope.profile.familyMembersAtMindtreeDetails[index]);
                                $rootScope.profile.familyMembersAtMindtreeDetailsBeingEdited.index = index;
                             }
                            }

                                $scope.addAndOpenEmptyModel = function(sectionName) {
                                    if(sectionName=="personalInformation"){
                                $rootScope.profile.personalInfoBeingEdited = {
                                    "firstname" : "",
                                    "personalInfoEdited" : false,
                                    "middlename" : "",
                                    "lastname" : "",
                                    "maidenName" : "",
                                    "fathersname" : "",
                                    "gender" : "",
                                    "DoB" : "",
                                    "emailAddress":""
                                };
                             }
                             else
                             if(sectionName=="addressInformation"){
                                  $rootScope.profile.addressBeingEdited = {
                                     "currentAddress" : "",
                                    "currentLandmark" : "",
                                    "currStartDate" : "",
                                     "addressEdited" : false,
                                    "currLastDate" : "",
                                    "PermanentAddress" : "",
                                    "permanentLandmark" : "",
                                    "permanentStartDate" : "",
                                    "permanentLastDate" : "",
                                    "mobileNum" : "",
                                    "landlineNum":""
                                };
                             }
                               else
                             if(sectionName=="schoolingDetailsInfo"){
                                  $rootScope.profile.schoolingDetailsBeingEdited = {
                                    "Details":"",
                                     "SchoolName":"",
                                     "City":"",
                                     "Board":"",
                                     "Yop":"",
                                    "CGPA":"",
                                    "schoolingDetailsEdited" : false
                                };
                             }
                             else
                             if(sectionName=="highestEduDetailsInfo"){
                                  $rootScope.profile.highestEduDetailsBeingEdited = {
                                    "ClgName_2ndHigh_edu":"",
                                     "CollegeAddress_high_edu":"",
                                     "CollegeAddress_2ndHigh_edu":"",
                                      "UniversityName_high_edu":"",
                                     "UniversityName_2ndHigh_edu":"",
                                     "UniversityAddress_high_edu":"",
                                    "UniversityAddress_2ndHigh_edu":"",
                                      "Subject_high_edu":"",
                                     "Subject_2ndHigh_edu":"",
                                     "DegreeType_high_edu":"",
                                     "DegreeType_2ndHigh_edu":"",
                                     "startdate_high_edu":"",
                                    "enddate_high_edu":"",
                                      "startdate_2ndHigh_edu":"",
                                     "enddate_2ndHigh_edu":"",
                                     "CGPA_high_edu":"",
                                     "CGPA_2ndHigh_edu":"",
                                    "RollNo_high_edu":"",
                                    "RollNo_2ndHigh_edu":"",
                                    "Graduated_high_edu":"",
                                     "Graduated_2ndHigh_edu":"",
                                     "Program_high_edu":"",
                                    "Program_2ndHigh_edu":"",
                                    "highestEduDetailsEdited" : false
                                };
                             }
                              else
                             if(sectionName=="employmentDetailsInfo"){
                                  $rootScope.profile.employmentDetailsBeingEdited ={
                                        "companyName":"",
                                        "positionHeld":"",
                                         "address":"",
                                         "Telephone":"",
                                             "period":{
                                                "to":"", 
                                                "from":""
                                            },
                                                "CTC":"",
                                             "Reasonforleaving":"",
                                            "NoticePeriod":"",
                                                "EmployeeCode":"",
                                                 "ReportingManager":"",
                                                "Designation_rm":"",
                                                    "ContactNo":"",
                                                "EmailID":"",
                                                "empType":"",
                                            "ClientInfo":"",
                                            "reference":"",
                                           "refDate":"",
                               
                                "employmentDetailsEdited" : false
                                };
                             }
                             else
                             if(sectionName=="workExperenceInfo"){
                                  $rootScope.profile.workExperenceDetailsBeingEdited = {
                                    "companyName":"",
                                     "Address":"",
                                     "period":{
                                        "to":"",
                                        "from":""
                                    },
                                     "Reasonforleaving":"",
                                     "ReportingManagerDetail":"",
                                    "workExperenceDetailsEdited" : false
                       };
                             }
                              else
                             if(sectionName=="overallExpInfo"){
                                  $rootScope.profile.overallExpDetailsBeingEdited = {
                                    "totalExp":"",
                                     "releventExp":"",
                                     "nonITExp":"",
                                    
                                    "overallExpDetailsEdited" : false
                       };
                             }
                            else
                             if(sectionName=="gapInfo"){
                                  $rootScope.profile.gapDetailsBeingEdited = {
                                    "period":{
                                        "to":"",
                                        "from":""
                                    },
                                     "reason":"",
                                     "gapType":"",
                                    "gapDetailsEdited" : false
                                    
                       };


                             }
                                 else
                             if(sectionName=="professionalReferencesInfo"){
                                  $rootScope.profile.professionalReferencesDetailsBeingEdited = {
                                    "name":"",
                                     "contactnumber":"",
                                     "currentlyWorking":"",
                                       "designation":"",
                                     "alternateNumber":"",
                                    "professionalReferencesDetailsEdited" : false                                   
                       };
                             }

                                 else
                             if(sectionName=="familyMembersAtMindtreeInfo"){
                                  $rootScope.profile.familyMembersAtMindtreeDetailsBeingEdited = {
                                    "relationship":"",
                                     "fullName":"",
                                     "MID":"",
                                    "familyMembersAtMindtreeDetailsEdited" : false                                   
                       };
                             }


                }
                 

                                $scope.removePersonalInfo = function(element) {
                                $rootScope.profile.personalInfo.splice(
                                        element.index, 1);// index,how_many
                                $rootScope.profile.pendingProfileString = null;
                                $scope.saveResume();
                            }


});
 

