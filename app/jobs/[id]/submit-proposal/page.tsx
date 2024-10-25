"use client";

import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  coverLetter: z.string().min(50, {
    message: "Cover letter must be at least 50 characters.",
  }),
  price: z.coerce.number().min(1, {
    message: "Please enter a valid price.",
  }),
  estimatedDuration: z.string().min(1, {
    message: "Please specify an estimated duration.",
  }),
});

import React, { useCallback } from "react";

import { Control } from "react-hook-form";

function CoverLetterField({ control }: { control: Control<any> }) {
  const renderField = useCallback(
    ({ field }: { field: any }) => (
      <FormItem>
        <FormLabel>Cover Letter</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Explain why you're the best fit for this job..."
            className="min-h-[200px]"
            {...field}
          />
        </FormControl>
        <FormDescription>
          Describe your experience and approach to this project
        </FormDescription>
        <FormMessage />
      </FormItem>
    ),
    [],
  );

  return (
    <FormField control={control} name="coverLetter" render={renderField} />
  );
}
