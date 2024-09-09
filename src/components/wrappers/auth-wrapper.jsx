import Text from "@/components/text";
import Container from "./container";
import Button from "../button";

export default function AuthWrapper({ children }) {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <div className="max-w-[500px] w-full">
          {/* Main Form */}
          <div className="md:p-8">
            {/* Login / Register Form */}
            <div className="w-full">{children}</div>

            {/* Social Login */}
            <div className="w-full">
              <Text customStyles="flex items-center justify-center gap-2 mt-2 mb-2 text-mute text-center after:content-[''] after:h-[1px] after:w-full after:bg-shade before:content-[''] before:h-[1px] before:w-full before:bg-shade">
                or
              </Text>
              <div className="flex flex-col gap-2">
                <Button
                  label="continue with google"
                  secondaryIcon="google"
                  variant="outline"
                />
                <Button
                  label="continue with facebook"
                  secondaryIcon="facebook"
                  variant="outline"
                />
                <Button
                  label="continue with twitter"
                  secondaryIcon="twitter"
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
