import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./MyPets.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myPets } from "../../actions/petAction";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Typography } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import LauchIcon from "@material-ui/icons/Launch";
import { formatDate } from "../Utils/Date";
import EditIcon from "@material-ui/icons/Edit";

const MyPets = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, pets } = useSelector((state) => state.myPets);
  const { user } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Pet ID", minWidth: 300, flex: 1 },
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
      field: "city",
      headerName: "City",
      minWidth: 150,
      flex: 0.3,
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
            <Link to={`/pet/user/update/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Link to={`/pet/${params.getValue(params.id, "id")}`}>
              <LauchIcon />
            </Link>
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
        status: item.status,
        area: item.area,
        city: item.city,
        address: item.address,
        date: formatDate(Date.parse(item.date)),
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(myPets());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Pets`} />
      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />

          <Typography id="myOrdersHeading">
            {user.name}'s Lost and Found Pets
          </Typography>
        </div>
      )}
    </Fragment>
  );
};

export default MyPets;
