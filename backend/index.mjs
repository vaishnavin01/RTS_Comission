// server.js

import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path, { dirname } from 'path';
import { configureDatabase, Form4, Form5, Form1, Form3, Form2, User } from './database.mjs';
import { talukasData } from './talukaData.mjs';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { v4 as uuidv4 } from 'uuid';

const app = express();
const secretKey = 'vaishnavinatheatthereategonde';
const port = 9002;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(bodyParser.json());


configureDatabase();
//Form2 multer storage

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/form2'));
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4() + '-' + file.originalname;
    cb(null, uniqueFilename);
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['application/pdf'];

  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF files are allowed.'), false);
  }
};


const upload2 = multer({ storage: storage2, fileFilter: fileFilter, });



app.post('/form2', upload2.fields([{ name: 'services_render_UnderAct', maxCount: 1 }, { name: 'no_non_notified_service', maxCount: 1 },]), async (req, res) => {
  try {
    /* console.log('Request Object:', req);
     console.log('request body', req.body);*/
    const {
      office_details,
      District,
      Taluka,
      Email,
      Phone_number,
      Administritive_Department,
      Designated_officer,
      designation_of_officer,
      Designated_officer_No,
      T_services_by_Dofficers,
      T_notified_services,
      notified_services_online,
      notified_services_offline,
      D_officer_receive_UId,
      UId_details,
      avail_necessary_facilities,
      upload_personal_details,
      necessary_technical_support,
      necessary_details_on_board,
      Acknowlwdgement_given,
      maintain_regiser_form4,
      registr_monthly_sertified_or_not,
      offline_application_info_revised,
      officer_undergone_legal_training,
      efforts_details,
      innovative_intiative_taken
    } = req.body;


    const filepaths = {
      services_render_UnderAct: req.files['services_render_UnderAct'] ? req.files['services_render_UnderAct'][0].path : null,
      no_non_notified_service: req.files['no_non_notified_service'] ? req.files['no_non_notified_service'][0].path : null,
    };


    const newForm2 = new Form2({
      office_details,
      District,
      Taluka,
      Email,
      Phone_number,
      Administritive_Department,
      Designated_officer,
      designation_of_officer,
      Designated_officer_No,
      services_render_UnderAct: filepaths.services_render_UnderAct,
      T_services_by_Dofficers,
      T_notified_services,
      notified_services_online,
      notified_services_offline,
      no_non_notified_service: filepaths.no_non_notified_service,
      D_officer_receive_UId,
      UId_details,
      avail_necessary_facilities,
      upload_personal_details,
      necessary_technical_support,
      necessary_details_on_board,
      Acknowlwdgement_given,
      maintain_regiser_form4,
      registr_monthly_sertified_or_not,
      offline_application_info_revised,
      officer_undergone_legal_training,
      efforts_details,
      innovative_intiative_taken
    });
    console.log(filepaths);

    console.log('Before saving to database');
    await newForm2.save();
    console.log('After saving to database');
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form to database:', error);
    console.error(error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//form3 multer storage
const storage3 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/uploads/form3'));
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4() + '-' + file.originalname;
    cb(null, uniqueFilename);
  },
});
const upload3 = multer({ storage: storage3, fileFilter: fileFilter, });
app.post('/form3', upload3.fields([{ name: 'name_of_NotifiedService', maxCount: 1 }, { name: 'timelimit', maxCount: 1 }]), async (req, res) => {
  try {
    const {
      Department,
      Reportperiod,
      Tnotified_services,
      pending_Applicatin,
      offline_applicationReceived,
      offlineapplicationReceived_April_2022,
      total_application,
      application_served_during,
      application_served_after,
      application_pending_during,
      application_pending_after,
      rejected_applications_withreason,
      rejected_applications_withoutreason,
      Designatin_name,
      place,
      Date
    } = req.body;
    const filepaths = {
      name_of_NotifiedService: req.files['name_of_NotifiedService'][0].path,
      timelimit: req.files['timelimit'][0].path,
    };


    const newForm3 = new Form3({
      Department,
      Reportperiod,
      Tnotified_services,
      name_of_NotifiedService: filepaths.name_of_NotifiedService,
      timelimit: filepaths.timelimit,
      pending_Applicatin,
      offline_applicationReceived,
      offlineapplicationReceived_April_2022,
      total_application,
      application_served_during,
      application_served_after,
      application_pending_during,
      application_pending_after,
      rejected_applications_withreason,
      rejected_applications_withoutreason,
      Designatin_name,
      place,
      Date,

    });

    await newForm3.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form to database:', error.message);
    console.error(error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//form4 multer configuration
const storage4 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/form4'));
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4() + '-' + file.originalname;
    cb(null, uniqueFilename);
  },
});
const upload4 = multer({ storage: storage4, fileFilter: fileFilter, });
app.post('/form4', upload4.single('nameofnotifiedservices'), async (req, res) => {
  try {
    const {
      department,
      reportperiod,
      tnotifiedservices,
      firstappealpending,
      offlineapplicationreceived,
      offlinefirstappealapplication,
      firstoverallnumapplication,
      firstappealdisposedwithin,
      firstappealdisposedafter,
      firstappealpendingend,
      headofdepartment,
      place,
      date,
    } = req.body;

    const filepath = req.file ? req.file.path.replace(/\\/g, '/') : null;

    const newForm4 = new Form4({
      department,
      reportperiod,
      tnotifiedservices,
      firstappealpending,
      offlineapplicationreceived,
      offlinefirstappealapplication,
      firstoverallnumapplication,
      firstappealdisposedwithin,
      firstappealdisposedafter,
      firstappealpendingend,
      headofdepartment,
      place,
      date,
      nameofnotifiedservices: filepath,
    });

    await newForm4.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//form5 multer configuration
const storage5 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/form5'));
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4() + '-' + file.originalname;
    cb(null, uniqueFilename);
  },
});


const upload5 = multer({ storage: storage5, fileFilter: fileFilter, });

app.post('/form5', upload5.fields([{ name: 'Tnotified_services', maxCount: 1 },
{ name: 'NotifiedServices', maxCount: 1 },]), async (req, res) => {
  try {
    console.log('Request Object:', req);
    console.log('request body', req.body);
    const {
      Department,
      Reportperiod,
      second_Appeal_pending,
      second_appeal_received,
      offline_second_appeal,
      numbr_of_appeals,
      second_appeal_disposed_within,
      second_appeal_disposed_after,
      second_appeal_pending_end,
      head_of_department,
      place,
      Date,
    } = req.body;

    const filepaths = {
      Tnotified_services: req.files['Tnotified_services'][0].path,
      NotifiedServices: req.files['NotifiedServices'][0].path,
    };

    const newForm5 = new Form5({
      Department,
      Reportperiod,
      Tnotified_services: filepaths.Tnotified_services,
      NotifiedServices: filepaths.NotifiedServices,
      second_Appeal_pending,
      second_appeal_received,
      offline_second_appeal,
      numbr_of_appeals,
      second_appeal_disposed_within,
      second_appeal_disposed_after,
      second_appeal_pending_end,
      head_of_department,
      place,
      Date,
    });

    await newForm5.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form to database:', error.message);
    console.error(error.stack);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});
//form1 multer storage

const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/form1'));
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4() + '-' + file.originalname;
    cb(null, uniqueFilename);
  },
});



const upload1 = multer({ storage: storage1, fileFilter: fileFilter, });



app.post('/form1', upload1.fields([{ name: 'service_provide_underAct', maxCount: 1 }, { name: 'non_notified_services', maxCount: 1 },]), async (req, res) => {
  try {
    /* console.log('Request Object:', req);
     console.log('request body', req.body);*/
    const {
      Email,
      office_details,
      District,
      Taluka,
      Phone_number,
      Administritive_Department,
      Head_of_office,
      HOD_Mobile_number,
      Designation_of_head_office,
      TServicesprovide_through_office,
      outOf_total_notified_service,
      outOf_notified_services_offline,
      T_designeted_officer,
      No_userId_receive,
      userId_not_receive,
      total_first_appelate_authority,
      No_userId_receive2,
      userId_not_receive2,
      access_necessary_equipement,
      designated_officer,
      first_appellate_authority,
      second_appelate_authority,
      update_personal_detail,
      necessary_technical_services,
      particular_req_display_board,
      Acknowlwdgement_given,
      keep_register_prescribed,
      register_sertified_byHOD,
      offline_app_submitted_superior_office,
      submitted_serviceWise_info,
      first_appeal_prev_month_end_status,
      first_appeal_dep_of,
      T_first_appeal_pending,
      appeals_pending_after_expiry,
      second_appeal_month_end,
      second_appeal_deposit_of,
      T_second_appeal_pending,
      T_pending_appeals,
      first_second_appeals_heared_byStarting_reason,
      panalty_imposed,
      first_second_appeal_properly_heared,
      properly_order_passed,
      first_appeal,
      second_appeal,
      panalty_Amt_paid,
      Amt_panalty,
      received_legal_technical_training,
      info_regarding_training,
      implimentation_rts,
      disciplinary_ordered_pass,
      necessary_measure,
      efforts_for_rts,
      information_rts,
    } = req.body;


    const filepaths = {
      service_provide_underAct: req.files['service_provide_underAct'] ? req.files['service_provide_underAct'][0].path : null,
      non_notified_services: req.files['non_notified_services'] ? req.files['non_notified_services'][0].path : null,
    };


    const newForm1 = new Form1({
      Email,
      office_details,
      District,
      Taluka,
      Phone_number,
      Administritive_Department,
      Head_of_office,
      HOD_Mobile_number,
      Designation_of_head_office,
      TServicesprovide_through_office,
      outOf_total_notified_service,
      outOf_notified_services_offline,
      T_designeted_officer,
      No_userId_receive,
      userId_not_receive,
      total_first_appelate_authority,
      No_userId_receive2,
      userId_not_receive2,
      access_necessary_equipement,
      designated_officer,
      first_appellate_authority,
      second_appelate_authority,
      update_personal_detail,
      necessary_technical_services,
      particular_req_display_board,
      Acknowlwdgement_given,
      keep_register_prescribed,
      register_sertified_byHOD,
      offline_app_submitted_superior_office,
      submitted_serviceWise_info,
      first_appeal_prev_month_end_status,
      first_appeal_dep_of,
      T_first_appeal_pending,
      appeals_pending_after_expiry,
      second_appeal_month_end,
      second_appeal_deposit_of,
      T_second_appeal_pending,
      T_pending_appeals,
      first_second_appeals_heared_byStarting_reason,
      panalty_imposed,
      first_second_appeal_properly_heared,
      properly_order_passed,
      first_appeal,
      second_appeal,
      panalty_Amt_paid,
      Amt_panalty,
      received_legal_technical_training,
      info_regarding_training,
      implimentation_rts,
      disciplinary_ordered_pass,
      necessary_measure,
      efforts_for_rts,
      information_rts,
      service_provide_underAct: filepaths.service_provide_underAct,
      non_notified_services: filepaths.non_notified_services,
    });
    console.log(filepaths);

    console.log('Before saving to database');
    await newForm1.save();
    console.log('After saving to database');
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form to database:', error);
    console.error(error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//fetching talukas according to district
app.get('/getTalukas', (req, res) => {
  const { district } = req.query;

  if (!district || !talukasData[district]) {
    return res.status(404).json({ error: 'Invalid district' });
  }

  const talukas = talukasData[district];
  res.json(talukas);
});

//form4 dashboard
app.get('/form4', async (req, res) => {
  try {

    const formData = await Form4.find({}, '-_id -__v');

    res.status(200).json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//form3 dashboard
app.get('/form3', async (req, res) => {
  try {

    const formData = await Form3.find({}, '-_id -__v');
    res.status(200).json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//form5 dashboard
app.get('/form5', async (req, res) => {
  try {

    const formData = await Form5.find({}, '-_id -__v');

    res.status(200).json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/form5/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedForm = await Form5.findByIdAndDelete(id);

    if (!deletedForm) {
      return res.status(404).json({ error: 'Form not found' });
    }

    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error('Error deleting form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//form2 dashboard

app.get('/form2', async (req, res) => {
  try {

    const formData = await Form2.find({}, '-_id -__v');

    res.status(200).json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//form1 dashboard

app.get('/form1', async (req, res) => {
  try {

    const formData = await Form1.find({}, '-_id -__v');

    res.status(200).json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ username: user.username, role: user.role }, 'secretKey', { expiresIn: '1h' });
  console.log(`User ${username} logged in`);
  res.json({ token, role: user.role });

});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({ username, password: hashedPassword, role: 'user' });
    await newUser.save();


    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
