import DashBoard from "./pages/DashboardPages/DashBoard";
import "./assets/css/fonts.css";
import Sidbar from "./Sidbar";
import { Routes, Route } from "react-router-dom";
import MyCalander from "./pages/Mycalendar/MyCalendar";
import Header from "./Header";
import Leads from "./pages/Leads/Leads";
import AddLeads from "./pages/Leads/AddLeads";
import Itinerary from "./pages/ItineraryANDquotation/Itinerary";
import AddItinerary from "./pages/ItineraryANDquotation/AddItinerary";
import ViewItinerary from "./pages/ItineraryANDquotation/ViewItinerary";
import InvoiceORbill from "./pages/InvoiceORbill/InvoiceORbill";
import AddInvoice from "./pages/ItineraryANDquotation/AddItinerary";
import ViewInvoice from "./pages/InvoiceORbill/ViewInvoice";

const App = () => {
  return (
    <div className="w-full ">
      <Sidbar />
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/calander" element={<MyCalander />} />
        <Route path="/leads">
          <Route index element={<Leads />}></Route>
          <Route path="addLeads" element={<AddLeads />}></Route>
        </Route>
        <Route path="/itinerary">
          <Route index element={<Itinerary />}></Route>
          <Route path="addItinerary" element={<AddItinerary />}></Route>
          <Route path="viewItinerary/:id" element={<ViewItinerary />}></Route>
        </Route>
        <Route path="/invoice">
          <Route index element={<InvoiceORbill />}></Route>
          <Route path="/invoice/addInvoice" element={<AddInvoice />}></Route>
          <Route path="/invoice/viewInvoice" element={<ViewInvoice />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
