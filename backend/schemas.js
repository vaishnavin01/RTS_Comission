import mongoose from "mongoose";

const form1Schema = mongoose.Schema({
    Email: String,
    office_details: String,
    District: String,
    Taluka: String,
    Phone_number: Number,
    Administritive_Department: String,
    Head_of_office: String,
    HOD_Mobile_number: Number,
    Designation_of_head_office: String,
    service_provide_underAct: Number,
    TServicesprovide_through_office: Number,
    outOf_total_notified_service: Number,
    outOf_notified_services_offline: Number,
    non_notified_services: Number,
    T_designeted_officer: Number,
    No_userId_receive: Number,
    userId_not_receive: Number,
    total_first_appelate_authority: Number,
    No_userId_receive2: Number,
    userId_not_receive2: Number,
    access_necessary_equipement: Number,
    designated_officer: String,
    first_appellate_authority: String,
    second_appelate_authority: String,
    update_personal_detail: String,
    necessary_technical_services: String,
    particular_req_display_board: String,
    Acknowlwdgement_given: String,
    keep_register_prescribed: String,
    register_sertified_byHOD: String,
    offline_app_submitted_superior_office: String,
    submitted_serviceWise_info: String,
    first_appeal_prev_month_end_status: Number,
    first_appeal_dep_of: Number,
    T_first_appeal_pending: Number,
    appeals_pending_after_expiry: Number,
    second_appeal_month_end: Number,
    second_appeal_deposit_of: Number,
    T_second_appeal_pending: Number,
    T_pending_appeals: Number,
    first_second_appeals_heared_byStarting_reason: Number,
    panalty_imposed: Number,
    first_second_appeal_properly_heared: String,
    properly_order_passed: String,
    first_appeal: String,
    second_appeal: String,
    panalty_Amt_paid: Number,
    Amt_panalty: Number,
    received_legal_technical_training: String,
    info_regarding_training: Number,
    implimentation_rts: String,
    disciplinary_ordered_pass: String,
    necessary_measure: Number,
    efforts_for_rts: String,
    information_rts: String

})

const Form1 = mongoose.model('Form1', form1Schema);

const form2Schema = mongoose.Schema({
    office_details: String,

    District: String,
    Taluka: String,
    Email: String,
    Phone_number: Number,
    Administritive_Department: String,
    Designated_officer: String,
    designation_of_officer: String,
    Designated_officer_No: Number,
    services_render_UnderAct: String,
    T_services_by_Dofficers: Number,
    T_notified_services: Number,
    notified_services_online: Number,
    notified_services_offline: Number,
    no_non_notified_service: String,
    D_officer_receive_UId: String,
    UId_details: Number,
    avail_necessary_facilities: String,
    upload_personal_details: String,
    necessary_technical_support: String,
    necessary_details_on_board: String,
    Acknowlwdgement_given: String,
    maintain_regiser_form4: String,
    registr_monthly_sertified_or_not: String,
    offline_application_info_revised: String,
    officer_undergone_legal_training: String,
    efforts_details: String,
    innovative_intiative_taken: String


})
const Form2 = mongoose.model('Form2', form2Schema)

const form3Schema = mongoose.Schema({
    Department: String,
    Reportperiod: Date,
    Tnotified_services: Number,
    name_of_NotifiedService: Number,
    timelimit: Number,
    pending_Applicatin: Number,
    offline_applicationReceived: Number,
    offlineapplicationReceived_April_2022: Number,
    total_application: Number,
    application_served_during: Number,
    application_served_after: Number,
    application_pending_during: Number,
    application_pending_after: Number,
    rejected_applications_withreason: Number,
    rejected_applications_withoutreason: Number,
    Designatin_name: String,
    place: String,
    Date: Date
});


const Form3 = mongoose.model('Form3', form3Schema);

const form4Schema = mongoose.Schema({
    department: String,
    reportperiod: Date,
    tnotifiedservices: Number,
    nameofnotifiedservices: String,
    firstappealpending: Number,
    offlineapplicationreceived: Number,
    offlinefirstappealapplication: Number,
    firstoverallnumapplication: Number,
    firstappealdisposedwithin: Number,
    firstappealdisposedafter: Number,
    headofdepartment: String,
    place: String,
    date: Date
});


const Form4 = mongoose.model('Form4', form4Schema);

const form5Schema = mongoose.Schema({
    Department: String,
    Reportperiod: Date,
    Tnotified_services: Number,
    NotifiedServices: Number,
    second_Appeal_pending: Number,
    second_appeal_received: Number,
    offline_second_appeal: Number,
    numbr_of_appeals: Number,
    second_appeal_disposed_within: Number,
    second_appeal_disposed_after: Number,
    second_appeal_pending_end: Number,
    head_of_department: String,
    place: String,
    Date: Date
})
const Form5 = mongoose.model('Form5', form5Schema)
export { Form1, Form2, Form3, Form4, Form5 }