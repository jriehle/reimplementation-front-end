import {createColumnHelper, Row} from "@tanstack/react-table";
import {MdOutlineDeleteForever as Remove} from "react-icons/md";
import {BsPencilFill as Edit} from "react-icons/bs";
import {Button} from "react-bootstrap";
import {IQuestionnaire} from "../../utils/interfaces";

/**
 * @author Jeffrey Riehle on March, 2024
 */

type Fn = (row: Row<IQuestionnaire>) => void;
const columnHelper = createColumnHelper<IQuestionnaire>();
export const questionnaireColumns = () => [
  columnHelper.accessor("id", {
    header: "Id",
    enableSorting: false,
    enableColumnFilter: false,
  }),

  columnHelper.accessor("name", {
    header: "Name",
    enableSorting: true,
  }),

  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <>
        <Button variant="outline-warning" size="sm">
          <Edit />
        </Button>
        <Button
          size="sm"
          variant="outline-danger"
          className="ms-sm-2"
        >
          <Remove />
        </Button>
      </>
    ),
  }),
];