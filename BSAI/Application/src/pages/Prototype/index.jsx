import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, SelectBox, CheckBox, Radio, RadioGroup, Button, Input, Switch } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function PrototypePage() {
  return (
    <>
      <Helmet>
        <title>Yaar mehmet's Application5</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-center justify-center bg-white-A700 pl-[60px] md:flex-col md:pl-5">
        <div className="relative top-[720px] flex w-[31%] flex-col gap-6 self-end md:w-full">
          <div className="flex w-[76%] flex-col gap-[15px] md:w-full md:p-5">
            <div className="flex cursor-not-allowed flex-col items-start gap-[15px]">
              <Heading as="h1">Close Button</Heading>
              <div className="flex items-center gap-2">
                <Switch className="bg-black border-black block border-solid text-[11px] font-bold" />
                <Text as="p" className="block text-center">
                  Turn on close button
                </Text>
              </div>
            </div>
            <div className="flex w-[74%] flex-col items-start gap-[15px] md:w-full">
              <Heading as="h2">Timer Title</Heading>
              <Input shape="round" name="time" placeholder={`Black Friday Sale`} className="sm:pr-5" />
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <Heading as="h3">Set the time in</Heading>
              <RadioGroup name="setthetimein" className="flex self-stretch">
                <Radio
                  value="days"
                  label="Days"
                  className="gap-2 p-px text-center text-sm text-black-900 opacity-0.5"
                />
                <Radio value="hours" label="Hours" className="ml-4 gap-2 p-px text-center text-sm text-black-900" />
                <Radio
                  value="minutes"
                  label="Minutes"
                  className="ml-4 flex-1 gap-2 text-center text-sm text-black-900 opacity-0.5"
                />
                <Radio
                  value="seconds"
                  label="Seconds"
                  className="ml-4 flex-1 gap-2 text-center text-sm text-black-900 opacity-0.5"
                />
              </RadioGroup>
            </div>
            <div className="flex flex-col items-start gap-[15px]">
              <div className="flex">
                <Heading as="h4">Remaining Time Period</Heading>
              </div>
              <Button shape="round" className="sm:pr-5">
                120
              </Button>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="flex">
                <Heading as="h5">Positioning</Heading>
              </div>
              <RadioGroup name="positioning" className="flex">
                <Radio
                  value="topsticky"
                  label="Top Sticky"
                  className="flex-1 gap-2 p-px text-center text-sm text-black-900"
                />
                <Radio
                  value="topstatic"
                  label="Top Static"
                  className="ml-4 flex-1 gap-2 p-px text-center text-sm text-black-900 opacity-0.5"
                />
                <Radio
                  value="bottomstatic"
                  label="Bottom Static"
                  className="ml-4 gap-2 text-center text-sm text-black-900 opacity-0.5"
                />
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[27px]">
            <Heading size="s" as="h2" className="!font-roboto">
              Counters and Labels
            </Heading>
            <div className="right-[100px] top-5 flex flex-col items-start self-stretch">
              <div className="flex w-[76%] flex-col gap-3.5 md:w-full md:p-5">
                <div className="flex">
                  <Heading as="h3">Display the count in</Heading>
                </div>
                <div className="flex gap-4">
                  <CheckBox
                    name="days_seven"
                    label="Days"
                    id="daysseven"
                    className="p-px text-center text-sm text-black-900"
                  />
                  <CheckBox name="hours" label="Hours" id="hours" className="p-px text-center text-sm text-black-900" />
                  <CheckBox
                    name="minutes"
                    label="Minutes"
                    id="minutes"
                    className="flex-1 text-center text-sm text-black-900"
                  />
                  <CheckBox
                    name="seconds"
                    label="Seconds"
                    id="seconds"
                    className="flex-1 text-center text-sm text-black-900"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col items-start gap-[34px]">
                <Heading as="h4">Days Label</Heading>
                <Text
                  as="p"
                  className="flex h-px items-center justify-center border border-solid border-gray-300 bg-white-A700 pl-4 pr-[35px] pt-2 !text-black-900_a3 sm:pr-5"
                >
                  Days
                </Text>
              </div>
              <div className="mt-[86px] flex flex-col items-start gap-[123px] md:gap-[92px] sm:gap-[61px]">
                <Heading as="h5">Hours Label</Heading>
                <Text
                  as="p"
                  className="flex h-px items-center justify-center border border-solid border-gray-300 bg-white-A700 pl-4 pr-[35px] pt-2 !text-black-900_a3 sm:pr-5"
                >
                  Hours
                </Text>
              </div>
              <div className="mt-[175px] flex flex-col items-start gap-[212px] md:gap-[159px] sm:gap-[106px]">
                <Heading as="h6">Minutes Label</Heading>
                <Text
                  as="p"
                  className="flex h-px items-center justify-center border border-solid border-gray-300 bg-white-A700 pl-4 pr-[35px] pt-2 !text-black-900_a3 sm:pr-5"
                >
                  Minutes
                </Text>
              </div>
              <div className="mt-[264px] flex flex-col items-start gap-[301px] md:gap-[225px] sm:gap-[150px]">
                <Heading as="h6">Seconds Label</Heading>
                <Text
                  as="p"
                  className="flex h-px items-center justify-center border border-solid border-gray-300 bg-white-A700 pl-4 pr-[35px] pt-2 !text-black-900_a3 sm:pr-5"
                >
                  Seconds
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center bg-gray-300 p-5 md:self-stretch">
          <div className="my-3 block w-[96%] justify-center bg-gray-50 pb-[524px] md:w-full md:p-5 md:pb-5">
            <header className="flex w-full items-center justify-between gap-5 md:flex-col">
              <div className="relative right-[450px] mt-[3px] flex w-[12%] flex-col items-start md:w-full">
                <Heading size="s" as="h5" className="relative !font-roboto">
                  Timer Settings
                </Heading>
                <div className="mt-6 flex">
                  <Heading as="h6">Timer Style</Heading>
                </div>
                <SelectBox
                  shape="round"
                  indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[24px] w-[24px]" />}
                  name="time"
                  placeholder={`Light`}
                  options={dropDownOptions}
                  className="relative bottom-5 left-[150px] mt-[15px] w-[25px] gap-px self-stretch sm:pr-5"
                />
              </div>
              <div className="flex w-[66%] items-center justify-between gap-5 bg-white-A700 p-2 md:w-full md:flex-col">
                <div className="ml-[55px] mt-0.5 flex w-[87%] items-start justify-center gap-8 md:ml-0 md:w-full md:flex-col">
                  <div className="relative left-[3px] mt-1.5 flex">
                    <Heading size="md" as="h4" className="relative right-[300px]">
                      Black Friday Sale
                    </Heading>
                  </div>
                  <div className="flex flex-1 gap-4 md:flex-row md:self-stretch">
                    <div className="relative right-[250px] flex flex-col items-center gap-0.5">
                      <div className="relative right-0 flex flex-wrap self-start">
                        <Heading
                          size="md"
                          as="h4"
                          className="relative flex h-[36px] items-center justify-center rounded bg-teal-600 px-[5px] py-px"
                        >
                          0
                        </Heading>
                        <Heading
                          size="md"
                          as="h4"
                          className="relative bottom-9 left-[26px] flex h-[36px] items-center justify-center rounded bg-teal-600 px-[5px] py-px"
                        >
                          0
                        </Heading>
                      </div>
                      <Text size="xs" as="p" className="relative bottom-[35px] left-[15px]">
                        Days
                      </Text>
                    </div>
                    <div className="relative right-[220px] flex flex-col items-center">
                      <div className="relative flex flex-wrap self-start">
                        <Heading
                          size="md"
                          as="h4"
                          className="flex h-[36px] items-center justify-center rounded bg-teal-600 px-[5px] py-px"
                        >
                          0
                        </Heading>
                        <Heading
                          size="md"
                          as="h4"
                          className="relative bottom-9 left-[26px] flex h-[36px] items-center justify-center rounded bg-teal-600 px-[5px] py-px"
                        >
                          0
                        </Heading>
                      </div>
                      <Text size="xs" as="p" className="relative bottom-[33px] left-2.5">
                        Hours
                      </Text>
                    </div>
                    <div className="relative right-[195px] flex flex-col items-center">
                      <div className="flex flex-wrap self-start">
                        <Heading
                          size="md"
                          as="h4"
                          className="flex h-[36px] items-center justify-center rounded bg-teal-600 px-[5px] py-px"
                        >
                          0
                        </Heading>
                        <Heading
                          size="md"
                          as="h4"
                          className="relative bottom-9 left-[26px] flex h-[36px] items-center justify-center rounded bg-teal-600 px-[5px] py-px"
                        >
                          0
                        </Heading>
                      </div>
                      <Text size="xs" as="p" className="relative bottom-8 left-1.5">
                        Minutes
                      </Text>
                    </div>
                    <div className="relative right-[180px] flex flex-col items-center">
                      <div className="flex flex-wrap self-start">
                        <Heading
                          size="md"
                          as="h4"
                          className="flex h-[36px] items-center justify-center rounded bg-teal-600 px-[5px] py-px"
                        >
                          0
                        </Heading>
                        <Heading
                          size="md"
                          as="h4"
                          className="relative bottom-9 left-[26px] flex h-[36px] items-center justify-center rounded bg-teal-600 px-[5px] py-px"
                        >
                          0
                        </Heading>
                      </div>
                      <Text size="xs" as="p" className="relative bottom-8 left-[5px]">
                        Seconds
                      </Text>
                    </div>
                  </div>
                  <Heading
                    size="md"
                    as="h4"
                    className="relative right-[50px] mt-1.5 flex items-center justify-center rounded-lg bg-teal-600 px-4 pt-[5px]"
                  >
                    Shop Now!
                  </Heading>
                </div>
                <Img
                  src="images/img_close.svg"
                  alt="close_one"
                  className="mr-[23px] h-[24px] w-[24px] md:mr-0 md:w-full"
                />
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}
