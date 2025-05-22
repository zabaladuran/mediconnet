"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../../../..//components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { toast } from "sonner";
import { Input } from "../../../../components/ui/input";

export const GetMedicalASsistanceForm = () => {
  const [step, setStep] = useState(0);
  const totalSteps = 3;

  const form = useForm();

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (formData) => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      console.log(formData);
      setStep(0);
      reset();

      toast.success("Form successfully submitted");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Form */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Multi form</CardTitle>
          <CardDescription>Current step {step + 1}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Ambito */}
          {step === 0 && (
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
                <FormField
                  key="mlCKtof9"
                  control={control}
                  name="mlCKtof9"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Input 1</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="" autoComplete="off" />
                      </FormControl>
                      <FormDescription></FormDescription>
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button
                    type="button"
                    className="font-medium"
                    size="sm"
                    onClick={handleBack}
                    disabled={step === 0}
                  >
                    Back
                  </Button>
                  <Button type="submit" size="sm" className="font-medium">
                    {step === 2 ? "Submit" : "Next"}
                  </Button>
                </div>
              </form>
            </Form>
          )}
          {/* Agendar por doctor especifico o Agendar por especialidad */}
          {step === 1 && (
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
                <FormField
                  key="LYZTn262"
                  control={control}
                  name="LYZTn262"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Input 1</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="" autoComplete="off" />
                      </FormControl>
                      <FormDescription></FormDescription>
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button
                    type="button"
                    className="font-medium"
                    size="sm"
                    onClick={handleBack}
                    disabled={step === 0}
                  >
                    Back
                  </Button>
                  <Button type="submit" size="sm" className="font-medium">
                    {step === 2 ? "Submit" : "Next"}
                  </Button>
                </div>
              </form>
            </Form>
          )}
          {/* Listado de posibles fechas */}
          {step === 2 && (
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
                <div className="border border-dashed rounded-md">
                  <div className="flex flex-col items-center justify-center h-[8rem]">
                    <h3 className="text-base font-semibold text-center">
                      No Inputs Added Yet!
                    </h3>
                    <p className="text-xs text-muted-foreground text-center">
                      Start building your form by adding input fields.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    className="font-medium"
                    size="sm"
                    onClick={handleBack}
                    disabled={step === 0}
                  >
                    Back
                  </Button>
                  <Button type="submit" size="sm" className="font-medium">
                    {step === 2 ? "Submit" : "Next"}
                  </Button>
                </div>
              </form>
            </Form>
          )}
          {/* Confirmacion e Informacion extra */}
        </CardContent>
      </Card>
    </div>
  );
};
