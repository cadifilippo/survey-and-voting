import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../common/layouts';
import { Main } from '../features';
import { VotingForm } from '../features/voting';

const Profile = () => {
  return <h2>Profile</h2>;
};
const Voting = () => {
  return <h2>Voting</h2>;
};
const Survey = () => {
  return <h2>Survey</h2>;
};
const SurveyForm = () => {
  return <h2>Survey Form</h2>;
};

function PrivateApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="voting">
            <Route path=":id" element={<Voting />} />
            <Route path="new" element={<VotingForm />} />
            <Route index element={<Navigate to="/" />} />
          </Route>
          <Route path="survey">
            <Route path=":id" element={<Survey />} />
            <Route path="new" element={<SurveyForm />} />
            <Route index element={<Navigate to="/" />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PrivateApp;
