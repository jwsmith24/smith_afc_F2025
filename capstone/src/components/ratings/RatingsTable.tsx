import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";

import { Loader2 } from "lucide-react";
import type { Rating } from "@/types/Rating.ts";

interface RatingsTableProps {
  ratings: Rating[];
  loading: boolean;
  error: Error | null;
  handleClick: (rating: Rating) => void;
  activeRating: Rating | undefined;
}

export default function RatingsTable({
  ratings,
  loading,
  error,
  handleClick,
  activeRating,
}: RatingsTableProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="animate-spin h-5 w-5 mr-2" />
        <span>Loading ratings...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-errorRed py-4 text-center">
        Failed to load ratings: {error.message}
      </div>
    );
  }

  if (ratings.length === 0) {
    return (
      <div className="text-center py-4 text-slate-500">No ratings found.</div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className={"text-right"}>Score</TableHead>
          <TableHead>Comment</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Updated</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {ratings.map((rating, index) => {
          console.log("active rating: ", activeRating);
          console.log("row rating: ", rating);
          return (
            <TableRow
              key={rating.id ?? `rating-${index}`}
              onClick={() => handleClick(rating)}
              className={` cursor-pointer ${activeRating?.id === rating.id ? "bg-electricBlue/20" : ""}`}
            >
              <TableCell className={"text-center"}>{rating.score} </TableCell>
              <TableCell>{rating.comment}</TableCell>
              <TableCell>{new Date(rating.created).toLocaleString()}</TableCell>
              <TableCell>{new Date(rating.updated).toLocaleString()}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
