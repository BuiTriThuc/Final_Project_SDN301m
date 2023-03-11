import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./PetsListAdmin.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminPet,  deletePet } from "../../actions/petAction";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_PET_RESET } from "../../constants/petConstant";
import { formatDate } from "../Utils/Date"

const PetsListAdmin = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, pets } = useSelector((state) => state.pets);
  const { error: deleteError, isDeleted } = useSelector(state => state.pet);

  const deletePetHandler = (id) => {
    dispatch(deletePet(id));
  }

  useEffect(() => {
    if (error) {
        alert.error(error);
        dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      alert.success("Pet Deleted Successfully");
      navigate("/admin/pets");
      dispatch({ type: DELETE_PET_RESET });
    }
    dispatch(getAdminPet());
  }, [dispatch, navigate, error, alert, deleteError, isDeleted])

  const columns = [
    { field: "id", headerName: "Pet ID", minWidth: 100, flex: 1 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Lost"
          ? "redColor"
          : "organeColor";
      },
    },
    {
      field: "area",
      headerName: "Area",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 270,
      flex: 0.5,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
            <Fragment>
              <Link to={`/admin/pet/update/${params.getValue(params.id, "id")}`}>
                <EditIcon />
              </Link>

              <Link to={`/pet/admin/updateStatusConfirm/${params.getValue(params.id, "id")}`} style={{ paddingLeft: "1vmax"}}>
                <AutorenewIcon />
              </Link>
  
              <Button onClick={() => deletePetHandler(params.getValue(params.id, "id"))}>
                <DeleteIcon />
              </Button>
            </Fragment>
          );
      },
    },
  ];
  const rows = [];

  pets &&
    pets.forEach((item, index) => {
      rows.push({
        id: item._id,
        name: item.name,
        status: item.status,
        area: item.area,
        address: item.address,
        date: formatDate(Date.parse(item.date))
      });
    });
  return (
    <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PETS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PetsListAdmin;
