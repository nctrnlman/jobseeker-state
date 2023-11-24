import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Modals from "../components/Modals";
import EditModals from "../components/EditModals";
import DeleteModals from "../components/DeleteModals";
import Search from "../components/Search";
import FilterBar from "../components/FilterBar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../features/redux";

function Candidate() {
  const [candidates, setCandidates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingCandidateId, setDeletingCandidateId] = useState(null);
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("");

  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.api);

  useEffect(() => {
    dispatch(getApi());
    fetchData();
  }, [currentPage, genderFilter, experienceFilter, dispatch]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8001/candidates", {
        params: {
          page: currentPage,
          pageSize: pageSize,
          search: searchTerm,
          gender: genderFilter === "all" ? "" : genderFilter,
          experience: experienceFilter,
        },
      });

      setCandidates(response.data.data);
      setTotalCandidates(response.data.total);
    } catch (error) {
      const errorMessage = error.response.data.message;
      toast.error(errorMessage, { position: toast.POSITION.BOTTOM_RIGHT });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = (candidates) => {
    setEditingCandidate(candidates);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingCandidate(null);
  };

  const handleDeleteClick = (candidateId) => {
    setDeletingCandidateId(candidateId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingCandidateId(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(totalCandidates / pageSize);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-10">
        <h1 className="text-4xl text-bold text-center">Candidate Table</h1>
      </div>
      <div className="flex gap-2 items-center py-5">
        <button
          type="button"
          onClick={openModal}
          className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Insert
        </button>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          experienceFilter={experienceFilter}
          setExperienceFilter={setExperienceFilter}
        />
        <FilterBar
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          experienceFilter={experienceFilter}
          setExperienceFilter={setExperienceFilter}
          handleFilterChange={fetchData}
        />
      </div>

      <Table
        candidates={candidates}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <Pagination
        totalItems={totalCandidates}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageSize={pageSize}
      />
      {isModalOpen && <Modals closeModal={closeModal} fetchData={fetchData} />}
      <EditModals
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        editingCandidate={editingCandidate}
        fetchData={fetchData}
      />
      <DeleteModals
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        candidateId={deletingCandidateId}
        fetchData={fetchData}
      />
      <div className="border mt-10">
        <h1 className="pb-5 text-2xl">API Render</h1>
        <p>{apiData?.id}</p>
        <p>{apiData?.title}</p>
        <p>{apiData?.description}</p>
        <p>{apiData?.discountPercentage}</p>
        <p>{apiData?.rating}</p>
        <p>{apiData?.stock}</p>
        <p>{apiData?.brand}</p>
        <p>{apiData?.category}</p>
      </div>
    </div>
  );
}

export default Candidate;
